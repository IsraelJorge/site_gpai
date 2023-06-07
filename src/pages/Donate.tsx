import Bath from '../assets/bath.png';
import Bed from '../assets/bed.png';
import Monetary from '../assets/monetary.png';
import Portion from '../assets/portion.png';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Main } from '../components/layouts/Main';
import { Route } from '../utils/Routes';

const typesDonate = [
  { label: 'Monetária', value: 'Monetaria' },
  { label: 'Itens de Banho', value: 'ItensBanho' },
  { label: 'Itens de Acomodação', value: 'ItensAcomodacao' },
  { label: 'Ração', value: 'Racao' },
];

export function Donate() {
  return (
    <Main>
      <Breadcrumb>
        <Breadcrumb.Item to={Route.home}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to=".">Doação</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-5xl text-primary font-bold text-center">
        Doe para a causa
      </h1>
      <h2 className="text-center text-primary font-bold">Você pode doar...</h2>
      <main className="flex justify-center gap-10 pb-8">
        <section className="flex flex-col justify-center gap-5">
          <div className="flex gap-3">
            <Card image={Portion} label="Ração" variant="donate" />
            <Card image={Bath} label="Itens de banho" variant="donate" />
          </div>
          <div className="flex  gap-3">
            <Card image={Bed} label="Itens de acomodação" variant="donate" />
            <Card
              image={Monetary}
              label="Quantias em dinheiro"
              variant="donate"
            />
          </div>
        </section>

        <section className="w-3/6">
          <h2 className="text-primary text-center my-6 font-semibold">
            Cadastrar Doação
          </h2>
          <Input name="nameDonate" label="Nome" />

          <div className="flex flex-wrap md:gap-3">
            <Input name="tellDonate" label="Telefone" className="flex-1" />
            <Input name="emailDonate" label="E-mail" className="flex-1" />
          </div>

          <div className="flex w-full gap-2">
            <Select
              label="Tipo de doação"
              data={typesDonate}
              displayKey="label"
              valueKey="value"
              name="typeDonate"
              onChange={(e) => console.log(e)}
              className="flex-1"
            />
            <Input
              name="unityDonate"
              label="Quantidade"
              className="basis-1/4"
            />
            <Input name="unityDonate" label="Unidade" className="basis-1/4" />
          </div>

          <Input name="descriptionDonate" label="Descrição" />

          <div className="flex flex-wrap gap-4 justify-end mb-10">
            <Button children="Realizar Doação" />
          </div>
        </section>
      </main>
    </Main>
  );
}
