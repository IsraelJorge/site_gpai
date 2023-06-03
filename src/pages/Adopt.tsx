import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import ImageCat from '../assets/gato-.jpg';
import ImageAurora from '../assets/Aurora.png';
import ImageCaramelo from '../assets/caramelo.png';
import ImageLittle from '../assets/LittleCats.png';
import ImageFederico from '../assets/Federico.png';
import ImageRodolfo from '../assets/Rodolfo.png';
import { Card } from "../components/Card";

const typeAdopt = [
  { label: 'Todas as Especies', value: 'todasAsEspecies' },
{ label: 'Gato', value: 'gato' },
{ label: 'Cachorro', value: 'cachorro' },
];

const typeSex = [
  {label: 'Todos os sexos', value: 'todosOsSexos'},
  {label: 'Macho', value: 'macho'},
  {label: 'Fêmea', value: 'femea'},
];

const typeStature = [
  {label: 'Todos os portes', value: 'todosOsPortes'},
  {label: 'Grande', value: 'grande'},
  {label: 'Médio', value: 'medio'},
  {label: 'Pequeno', value: 'pequeno'},
];

export function Adopt() {
  return (
    <>
      <main >
        <Breadcrumb>
          <Breadcrumb.Item to="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item to=".">Adote</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-5">Encontre seu novo amigo</h1>

        <section className=" bg-slate-50 p-4 rounded-md shadow-md mb-5 flex flex-col" >
          <div className="flex flex-wrap  gap-2">
          <Select 
            label="Busque por espécie"
            data={typeAdopt}
            displayKey="label"
            valueKey="value"
            name="buscaPorEspecie"
            onChange={(e)=>console.log(e)}
            className="flex-1"
          />

          <Select 
            label="Busque pelo gênero"
            data={typeSex}
            displayKey="label"
            valueKey="value"
            name="buscaPorEspecie"
            onChange={(e)=>console.log(e)}
            className="flex-1"
          />

          <Select 
            label="Busque pelo porte"
            data={typeStature}
            displayKey="label"
            valueKey="value"
            name="buscaPorEspecie"
            onChange={(e)=>console.log(e)}
            className="flex-1"
          />
          </div>
          <Button children='Buscar'/>

        </section>
        <section className=" flex flex-col items-center">
          <div className="flex flex-wrap gap-5 mb-4">
            <Card image={ImageAurora} label="Aurora" description="" />
            <Card image={ImageCaramelo} label="Caramelo" description=""/>
            <Card image={ImageCat} label="Aurora" description=""/>
            <Card image={ImageFederico} label="Federico" description=""/>
          </div>
          <div className="flex flex-wrap gap-5 mb-4">
            <Card image={ImageLittle} label="Little Cats" description=""/>
            <Card image={ImageRodolfo} label="Rodolfo" description=""/>
            <Card image={ImageAurora} label="Pug" description=""/>
            <Card image={ImageLittle} label="Trigêmias" description=""/>
          </div>
          <div className="flex flex-wrap gap-5 mb-4">
            <Card image={ImageCaramelo} label="Doginho" description=""/>
            <Card image={ImageCat} label="Garfield" description=""/>
            <Card image={ImageFederico} label="Fred" description=""/>
            <Card image={ImageRodolfo} label="Dogolfo" description=""/>
          </div>
        </section>
        <section className="flex justify-end gap-2 mb-7">
          <Button children='1' variant={"outline"}/>
          <Button children='2' variant={"outline"}/>
          <Button children='3' variant={"outline"}/>
          <Button children='4' variant={"outline"}/>
          <Button children='5' variant={"outline"}/>
          <Button children='6' variant={"outline"}/>
          <Button children='7' variant={"outline"}/>
        </section>
      </main>
    </>
  );
}
