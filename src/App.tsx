import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
export const App = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <main>
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};
