import { Button } from "@/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Hero } from "@/components/ui/Hero";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-left animate-duration-[2500ms] animate-delay-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¿Qué reciclar?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transformando la educación, un reciclaje a la vez. En nuestra
                universidad, cada papel, botella y lata cuenta para un futuro
                más verde.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/img/plastic.jpeg"
                alt="platico"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Botellas pláticas</h3>
                <p className="text-sm text-gray-500">
                  Botellas de refrescos, jugos naturales, envases plásticos
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$2.99/lb</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/img/cardboard.jpeg"
                alt="carton"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Cartón</h3>
                <p className="text-sm text-gray-500">
                  Cajas de cartón, envases de huevos, etc
                </p>
                <h4 className="font-semibold text-lg md:text-xl">$4.99/lb</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/img/can.jpeg"
                alt="latas"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Latas</h3>
                <p className="text-sm text-gray-500">
                  Latas de refrescos, productos enlatados
                </p>
                <h4 className="font-semibold text-lg md:text-xl">
                  $3.49/bunch
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 animate-fade-right animate-duration-[2500ms] animate-delay-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#333] mb-4">
                Nuestros Productos Más Reciclados
              </h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                En VerdIES, nos enorgullece nuestro compromiso con la
                sostenibilidad.
              </p>
            </div>
            <div className="">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Producto 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#333] mb-2">
                    Producto 1
                  </h3>
                  <p className="text-[#666] mb-4">
                    Descripción breve del producto 1 hecho con materiales
                    reciclados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover the Best Destinations
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our curated collection of stunning travel destinations.
          </p>
          <Button>Explore Now</Button>
        </div>
        <div className="w-full md:w-[50%] relative">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Destination 1"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Destination 2"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  alt="Destination 3"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious>
              <Button variant="ghost" size="sm" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>
            </CarouselPrevious>
            <CarouselNext>
              <Button variant="ghost" size="sm" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Button>
            </CarouselNext>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default HomePage;
