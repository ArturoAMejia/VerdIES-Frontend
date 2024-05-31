import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { AuthProviders } from "@/components/ui/AuthProviders";
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
import { Link, Navigate } from "react-router-dom";

const registerSchema = z.object({
  first_name: z.string(),
  lastname: z.string(),
  email: z.string().email({ message: "Correo inválido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

type FormDataType = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  // const pathname = useLocation();

  const form = useForm<FormDataType>({ resolver: zodResolver(registerSchema) });

  const { mutate, isError } = useRegisterUser();

  const onRegisterUser = async (data: FormDataType) => {
    mutate(data);

    if (isError) {
      console.log("Error al registrar");
    }

    <Navigate to="/auth/login" />;
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
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
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
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
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
