// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-[url(/img/hero1.jpeg)] bg-cover bg-center bg-no-repeat animate-fade animate-duration-[2500ms] animate-delay-100">
      <div className="absolute inset-0 bg-black sm:bg-transparent from-white to-white/25 bg-gradient-to-r "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Nosotros somos
            <strong className="block font-extrabold text-[#45B48B]">
              {" "}
              VerdIES{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/auth/register"
              className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow sm:w-auto"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
