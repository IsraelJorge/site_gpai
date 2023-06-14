import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Dialog } from '../components/Dialog';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthProvider } from '../context/AuthProvider';
import { DialogProvider } from '../context/DialogProvider';

export default function Root() {
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <AuthProvider>
      <DialogProvider>
        <Dialog />
        <div className="w-full h-full">
          <Header />
          <div className="w-full h-full">
            <Outlet />
          </div>
          <Footer />
        </div>
      </DialogProvider>
    </AuthProvider>
  );
}
