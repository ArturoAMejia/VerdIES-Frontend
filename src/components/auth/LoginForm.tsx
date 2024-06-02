import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../ui";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUser } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useAppStore } from "@/store/store";

const loginSchema = z.object({
  email: z.string().email({ message: "Correo inválido" }).default(""),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .default(""),
});

type FormDataType = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();

  const { setUser } = useAppStore((state) => state);

  const form = useForm<FormDataType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLoginUser();

  const onLoginUser = async (data: FormDataType, event) => {
    event.preventDefault();

    try {
      const res = await login.mutateAsync(data);
      console.log(res);
      setUser(res);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
            <p className="text-balance text-muted-foreground">
              Ingresa tu email para iniciar sesión
            </p>
          </div>

          <Form {...form}>
            <form
              className="grid gap-2"
              onSubmit={form.handleSubmit(onLoginUser)}
            >
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
            </form>

            {/* <AuthProviders register={false} /> */}
          </Form>
          <div className="mt-4 text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link to="/auth/register" className="underline">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
