import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
