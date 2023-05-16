import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="max-w-7xl"></div>
      <Footer />
    </div>
  );
}
