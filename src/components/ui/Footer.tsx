import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold dark:text-gray-50">
            VerdIES
          </span>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
          <Link
            className="font-bold hover:underline underline-offset-4 dark:text-gray-300"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="font-bold hover:underline underline-offset-4 dark:text-gray-300"
            to="/clasificacion"
          >
            Clasificación
          </Link>
          <Link
            className="font-bold hover:underline underline-offset-4 dark:text-gray-300"
            to="/quienes-somos"
          >
            ¿Quiénes somos?
          </Link>
          <Link
            className="font-bold hover:underline underline-offset-4 dark:text-gray-300"
            to="/canjear"
          >
            Canjear
          </Link>
        </nav>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 IES - Instituto Ecológico Superior. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
