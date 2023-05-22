import HandsImage from '../assets/animal-therapy.svg';
import DogImage from '../assets/dogImage.png';
import MenAndDogImage from '../assets/men-and-dog.svg';
import WomenAndCatImage from '../assets/women-and-cat .svg';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Paws } from '../components/Paws';

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
          <Paws />
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
          <div className="mask-border-radius ">
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
        <h2 className="text-primary font-bold text-3xl mb-6">
          Por que adotar?
        </h2>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="w-96 flex items-center justify-center py-5 pr-6 rounded-2xl bg-neutral border-[3px] border-primary">
            <div className=" h-32 flex items-center flex-1">
              <figure className="px-5">
                <img src={HandsImage} alt="Figura" />
              </figure>
              <div className="w-44 flex-1">
                <p className="text-justify">
                  <span className="text-primary font-medium ">
                    Nesse exato momento,
                  </span>
                  <br />
                  existem milhares de doguinhos e gatinhos esperando um humano
                  para chamar de seu.
                </p>
              </div>
            </div>
          </div>

          <div className="w-96 flex items-center justify-center py-5 pr-6 rounded-2xl bg-neutral border-[3px] border-primary">
            <div className=" h-32 flex items-center flex-1">
              <figure className="px-5">
                <img src={WomenAndCatImage} alt="Figura" />
              </figure>
              <div className="w-44 flex-1">
                <p className="text-justify">
                  <span className="text-primary font-medium ">
                    E não há recompensa maior
                  </span>
                  <br /> do que vê-los se tornando aquela coisinha alegre e
                  saudável depois de uma boa dose de cuidado e carinho.
                </p>
              </div>
            </div>
          </div>

          <div className="w-96 flex items-center justify-center py-5 pr-6 rounded-2xl bg-neutral border-[3px] border-primary">
            <div className=" h-32 flex items-center flex-1">
              <figure className="px-5">
                <img src={MenAndDogImage} alt="Figura" />
              </figure>
              <div className="w-44 flex-1">
                <p className="text-justify">
                  <span className="text-primary font-medium ">
                    Pensando bem, a pergunta é outra:
                  </span>
                  <br />
                  se você pode mudar o destino de um animal de rua, por que não
                  faria isso?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex items-center justify-center mt-16 mb-28">
        <Button className="w-96">
          <Button.Label>Encontrar meu novo amigo</Button.Label>
        </Button>
      </div>
    </div>
  );
}
