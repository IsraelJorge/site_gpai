import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CardDonate } from "../components/CardDonate";
import { Input } from "../components/Input";
import { Inputselect } from "../components/Inputselect";

const tiposValue = ['','Monetaria', 'ItensBanho','ItensAcomodacao','Racao'];
const tipos = ['Tipos de Doação','Monetária','Itens de Banho', 'Itens de Acomodação', 'Ração'];

export function Donate() {
  return (
    <>  
      <Breadcrumb>
        <Breadcrumb.Item to={'/'}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to={'.'}>Doação</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-3xl font-medium text-center">Doe para a causa</h1>
      <h2 className="text-center">Você pode doar...</h2>
      <main className="flex flex-wrap">
        <section className="flex items-center">
          <div>
            <CardDonate card="portion" texto="Ração"/> 
            <CardDonate card="bath" texto="Itens de Banho"/> 
          </div>
          <div>
            <CardDonate card="bed" texto="Itens de Acomodação"/> 
            <CardDonate card="monetary" texto="Quantias em Dinheiro"/>  
          </div>
        </section>

        <section className=" flex-1 w-3/6">
          <h2 className="text-center my-6 font-semibold">Cadastrar Doação</h2>
          <Input name="nameDonate" label="Nome" />

          <div className="flex flex-wrap md:gap-4">
            <Input name="tellDonate" label="Telefone" className="flex-1"/>
            <Input name="emailDonate" label="E-mail" className="flex-1"/>
          </div>

          <div className="flex gap-2">
           <div className="flex-1">
            <Inputselect tipoInput="select" id="" valor={tiposValue} nomeOption={tipos} name="typedonate"/>
          </div>
          <div className="flex-1">
            <Inputselect tipoInput="number" id="" name="qtddonate" nomeOption={[]} valor={[]}/>
            </div>
            
            <div className="flex-1">
            <Input name="unityDonate" label="Unidade" />
            </div>

          </div>

          <Input name="descriptionDonate" label="Descrição"/>

          <div className="flex flex-wrap gap-4 justify-between mb-10">
            <Button children="Realizar Login"/>
            <Button children="Doar sem cadastro" variant={"outline"}/>
          </div>
        </section>
      </main>
    </>
  );
}
