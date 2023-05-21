import DogImage from '../assets/dogImage.png';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function Home() {
  return (
    <div className="w-full h-full ">
      <section className="flex flex-col md:flex-row justify-between gap-7 ">
        <div className="flex flex-col items-center md:items-start justify-between flex-1">
          <div>
            <h1 className="text-primary text-center md:text-start font-bold text-6xl mb-4">
              G.P.A.I
            </h1>
            <h2 className="text-primary font-medium text-center md:text-start text-3xl max-w-xl mb-16">
              Grupo de Proteção aos Animais de Imperatriz
            </h2>
          </div>

          <div className="flex w-full flex-col md:flex-row flex-wrap gap-5 md:gap-7">
            <Button className="flex-1">
              <Button.Label>Quero Adotar</Button.Label>
            </Button>
            <Button variant="outline" className="flex-1 ">
              <Button.Label>Quero divulgar um animal</Button.Label>
            </Button>
          </div>
        </div>
        <picture className="hidden  md:flex justify-center flex-1">
          <div className="mask-border-radius w-10/12 ">
            <img
              src={DogImage}
              alt="Imagem de um Cachorro"
              className="object-cover"
            />
          </div>
        </picture>
      </section>

      <section className="pt-16">
        <h2 className="text-primary font-bold text-3xl ">
          Novos peludos por aqui
        </h2>
        <p className="text-xl text-black/50">
          Nosso site está cheio de doguinhos e gatinhos ansiosos por uma
          família. Vem ver!
        </p>

        <div className="flex flex-wrap justify-between gap-5 pt-12">
          {new Array(8).fill('').map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </section>

      <section className="pt-12">
        <h2 className="text-primary font-bold text-3xl mb-4">
          Por que adotar?
        </h2>
      </section>
    </div>
  );
}
