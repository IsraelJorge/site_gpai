import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Select } from '../components/Select';
import { Card } from '../components/Card';
import { Main } from '../components/layouts/Main';
import { useAnimalsGet } from '../services/datasources/hooks/useAnimalsGet';
import { textSlice } from '../utils/textSlice';

const typeAdopt = [
  { label: 'Todas as Especies', value: 'todasAsEspecies' },
  { label: 'Gato', value: 'gato' },
  { label: 'Cachorro', value: 'cachorro' },
];

const typeSex = [
  { label: 'Todos os sexos', value: 'todosOsSexos' },
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
];

const typeStature = [
  { label: 'Todos os portes', value: 'todosOsPortes' },
  { label: 'Grande', value: 'grande' },
  { label: 'Médio', value: 'medio' },
  { label: 'Pequeno', value: 'pequeno' },
];

export function Adopt() {
  const { data } = useAnimalsGet();
  return (
    <Main>
      <main>
        <Breadcrumb>
          <Breadcrumb.Item to="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item to=".">Adote</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-5">Encontre seu novo amigo</h1>

        <section className=" bg-slate-50 p-4 rounded-md shadow-md mb-5 flex flex-col">
          <div className="flex flex-col md:flex-row flex-wrap gap-2">
            <Select
              label="Busque por espécie"
              data={typeAdopt}
              displayKey="label"
              valueKey="value"
              name="buscaPorEspecie"
              onChange={(e) => console.log(e)}
              className="flex-1"
            />

            <Select
              label="Busque pelo gênero"
              data={typeSex}
              displayKey="label"
              valueKey="value"
              name="buscaPorgenero"
              onChange={(e) => console.log(e)}
              className="flex-1"
            />

            <Select
              label="Busque pelo porte"
              data={typeStature}
              displayKey="label"
              valueKey="value"
              name="buscaPorporte"
              onChange={(e) => console.log(e)}
              className="flex-1"
            />
          </div>
          <Button children="Buscar" />
        </section>
        <section className="flex flex-wrap justify-between gap-10 py-5">
          {data?.map((animal) => (
            <Card
              id={animal.id}
              image={animal.images[0].urls.split(',')[0]}
              label={animal.name}
              description={textSlice(animal.description)}
              key={animal.id}
            />
          ))}
        </section>
        <section className="flex justify-end gap-2 mb-7">
          <Button children="1" variant={'outline'} />
          <Button children="2" variant={'outline'} />
          <Button children="3" variant={'outline'} />
          <Button children="4" variant={'outline'} />
          <Button children="5" variant={'outline'} />
          <Button children="6" variant={'outline'} />
          <Button children="7" variant={'outline'} />
        </section>
      </main>
    </Main>
  );
}
