import { GalleryAnimal } from '../components/GalleryAnimal';
import { Icon } from '../components/Icon';
import { Main } from '../components/layouts/Main';

import { Button } from '../components/Button';
import { Breadcrumb } from '../components/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import { useAnimalsFind } from '../services/datasources/hooks/useAnimalsFind';
import { formateDate } from '../utils/formateDate';
import { useDialog } from '../context/DialogProvider';
import { Route } from '../utils/Routes';

export function AnimalDetails() {
  const params = useParams() as { id: string };
  const navigate = useNavigate();
  const { showDialog } = useDialog();

  const { data } = useAnimalsFind(params.id);

  const handleSubmit = () => {
    showDialog({
      title: 'Sua solicitação foi enviada.',
      message:
        'Sua solicitação foi enviada. Em breve, a ONG Gpai entrará em contato.',
      buttons: [
        {
          label: 'Ok',
          type: 'default',
          onClick: () => navigate(Route.home),
        },
      ],
    });
  };

  return (
    <Main>
      <Breadcrumb>
        <Breadcrumb.Item to="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to=".">Detalhes do Pet</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-2 gap-7 pt-2 pb-10">
        <section>
          <GalleryAnimal photos={data?.images[0].urls.split(',')} maxImgs={3} />
        </section>
        <section>
          <h1 className="font-bold text-5xl text-primary">{data?.name}</h1>
          <span className="block font-semibold my-3">
            {`${data?.specie} | ${data?.sex} | ${data?.stature} | ${data?.race}`}
          </span>
          <div className="flex items-center gap-2 font-normal my-3">
            <Icon name="FaUserAlt" size={20} />
            <p>
              Publicado por <span className="font-bold">{data?.user.name}</span>
              em {formateDate(data?.craetedAt)}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <h2 className="font-bold text-2xl text-primary">Descrição</h2>
            <p>{data?.description}</p>
          </div>
          <Button className="w-full max-w-xs mt-20" onClick={handleSubmit}>
            <Button.Label>Quero Adotar</Button.Label>
          </Button>
        </section>
      </div>
    </Main>
  );
}
