import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Root() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full max-w-7xl mx-auto pt-16 px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}