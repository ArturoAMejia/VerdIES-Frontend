import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useAppStore } from "@/store/store";

export default function Navbar() {
  const { logout, isAuth } = useAppStore((state) => state);
  return (
    <header className="flex h-20 w-full items-center justify-between px-8 md:px-12 bg-[#C0E9DA]">
      <Link className="flex items-center" to="#">
        {/* <img src="" alt="" /> */}
        <Logo />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-4 md:flex">
        <Link
          className="font-bold text-sm hover:underline hover:underline-offset-4"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="font-bold text-sm hover:underline hover:underline-offset-4"
          to="/clasificacion"
        >
          Clasificación
        </Link>
        <Link
          className="font-bold text-sm hover:underline hover:underline-offset-4"
          to="/quienes-somos"
        >
          ¿Quiénes somos?
        </Link>
        <Link
          className="font-bold text-sm hover:underline hover:underline-offset-4"
          to="/canjear"
        >
          Canjear
        </Link>
        {!isAuth && (
          <>
            <Button>
              <Link
                className="font-bold text-sm hover:underline hover:underline-offset-4"
                to="/auth/login"
              >
                Iniciar sesión
              </Link>
            </Button>
            <Button className="bg-[#4A5F7E]">
              <Link
                className="font-bold text-sm hover:underline hover:underline-offset-4"
                to="/auth/register"
              >
                Regístrate
              </Link>
            </Button>
          </>
        )}

        {isAuth && <Button onClick={() => logout()}>Cerrar sesión</Button>}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-6">
            <Link
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              to="/"
            >
              Inicio
            </Link>
            <Link
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              to="/clasificacion"
            >
              Clasificación
            </Link>
            <Link
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              to="/quienes-somos"
            >
              ¿Quiénes somos?
            </Link>
            <Link
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              to="/canjear"
            >
              Canjear
            </Link>
            <Button>
              <Link
                className="font-bold text-sm hover:underline hover:underline-offset-4"
                to="/auth/login"
              >
                Iniciar sesión
              </Link>
            </Button>
            <Button className="bg-[#4A5F7E]">
              <Link
                className="font-bold text-sm hover:underline hover:underline-offset-4"
                to="/auth/register"
              >
                Regístrate
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
