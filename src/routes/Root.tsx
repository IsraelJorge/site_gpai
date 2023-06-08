import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthProvider } from '../context/AuthProvider';
import { useEffect } from 'react';

export function Root() {
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <AuthProvider>
      <div className="w-full h-full">
        <Header />
        <div className="w-full h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
