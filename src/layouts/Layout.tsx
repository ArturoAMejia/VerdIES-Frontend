import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Outlet />
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};
