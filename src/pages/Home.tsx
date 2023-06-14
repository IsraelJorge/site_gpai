import HandsImage from '../assets/animal-therapy.svg';
import DogImage from '../assets/dogImage.png';
import MenAndDogImage from '../assets/men-and-dog.svg';
import WomenAndCatImage from '../assets/women-and-cat .svg';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Paws } from '../components/Paws';
import { Route } from '../utils/Routes';
import { Main } from '../components/layouts/Main';
import { useAuth } from '../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { useDialog } from '../context/DialogProvider';
import { useAnimalsGet } from '../services/datasources/hooks/useAnimalsGet';
import { textSlice } from '../utils/textSlice';
import { Loading } from '../components/Loading';

export function Home() {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const { showDialog, closeDialog } = useDialog();

  const handleAnimalRegistration = () => {
    if (isLogged()) return navigate(Route.animalRegistration);

    showDialog({
      title: 'Login necessário',
      message: 'Faça login para poder divulgar pets para adoção.',
      buttons: [
        {
          label: 'Cancelar',
          type: 'outline',
          onClick: () => closeDialog(),
        },
        {
          label: 'Ir para login',
          icon: 'MdLogin',
          type: 'default',
          onClick: () => navigate(Route.login),
        },
      ],
    });
  };

  const { data, isLoading } = useAnimalsGet();

  return (
    <Main>
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
            <Button as="Link" to={Route.adopt} className="flex-1">
              <Button.Label>Quero Adotar</Button.Label>
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleAnimalRegistration}
            >
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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data?.slice(0, 8)?.map((animal) => (
                <Card
                  id={animal.id}
                  image={animal.images[0].urls.split(',')[0]}
                  label={animal.name}
                  description={textSlice(animal.description)}
                  key={animal.id}
                />
              ))}
            </>
          )}
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
        <Button as="Link" to={Route.adopt} className="w-96">
          <Button.Label>Encontrar meu novo amigo</Button.Label>
        </Button>
      </div>
    </Main>
  );
}
