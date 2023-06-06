import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthProvider } from '../context/AuthProvider';

export function Root() {
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
