import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-wrap items-center justify-between gap-1">
          {new Array(8).fill('').map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
