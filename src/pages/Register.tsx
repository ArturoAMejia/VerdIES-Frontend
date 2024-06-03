import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUser } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Correo inválido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  password_confirmation: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

type FormDataType = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const navigate = useNavigate();

  const form = useForm<FormDataType>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const register = useRegisterUser();

  const onRegisterUser = async (data: FormDataType) => {
    try {
      await register.mutateAsync(data);
      toast.success("Usuario creado correctamente");
      toast.success("Por favor verificar su correo electrónico");
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center mt-32">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Regístrate!</CardTitle>
          <CardDescription>
            Ingresa tu información para crear una cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onRegisterUser)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmación contraseña</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2">
                Crear Cuenta
              </Button>
            </form>
          </Form>
          {/* <AuthProviders register={true} /> */}
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/auth/login" className="underline">
              Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
