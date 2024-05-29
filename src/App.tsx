import { Navigate, Outlet, useLocation } from 'react-router-dom';


export const App = () => {

  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="/auth/login" />;
  }
  
  return (
    <main>
      <Outlet />
    </main>
  )
}