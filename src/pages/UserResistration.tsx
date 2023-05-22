import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function UserRegistration() {
  return (
    <>
      <main className="p-5 text-primary ">
        <p>Home {'>'} Cadastro</p>
        <h1 className="text-4xl my-3">Formulário de Cadastro</h1>
        <Input name="name" label="Nome:" />

        <div className="flex flex-wrap md:gap-4">
          <Input name="cell" label="Telefone" className="flex-1" />
          <Input name="cpf" label="Cpf" className="flex-1" mask="cpf" />
        </div>

        <Input name="address" label="Endereço" />
        <p>Desejo me relacionar com a ONG como:</p>
        <div className="flex justify-between flex-wrap mx-2 my-5">
          <div className="flex flex-col gap-5 md:flex-row justify-between flex-wrap">
            <div>
              Adotante:
              <div className="flex">
                <label
                  htmlFor="yadoptant"
                  className="flex justify-center items-center"
                >
                  Sim
                  <input
                    className="mr-3 ml-1"
                    type="radio"
                    name="yadoptant"
                    id="yadoptant"
                  />
                </label>
                <label className="flex justify-center items-center">
                  Não
                  <input className="mr-3 ml-1" type="radio" name="yadoptant" />
                </label>
              </div>
            </div>
            <div>
              Mantenedor:
              <div className="flex">
                <label
                  htmlFor="ymaintainer"
                  className="flex justify-center items-center"
                >
                  Sim
                  <input
                    className="mr-3 ml-1"
                    type="radio"
                    name="maintainer"
                    id="ymaintainer"
                  />
                </label>
                <label
                  htmlFor="nmaintainer"
                  className="flex justify-center items-center"
                >
                  Não
                  <input
                    className="mr-3 ml-1"
                    type="radio"
                    name="maintainer"
                    id="nmaintainer"
                  />
                </label>
              </div>
            </div>
            <div>
              Protetor:
              <div className="flex">
                <label
                  htmlFor="sprotetor"
                  className="flex justify-center items-center"
                >
                  Sim
                  <input
                    className="mr-3 ml-1"
                    type="radio"
                    name="protetor"
                    id="sprotetor"
                  />
                </label>
                <label
                  htmlFor="nprotetor"
                  className="flex justify-center items-center"
                >
                  Não
                  <input
                    className="mr-3 ml-1"
                    type="radio"
                    name="protetor"
                    id="nprotetor"
                  />
                </label>
              </div>
            </div>
          </div>
          <p className="text-xs">Permitido marcar mais de um modo</p>
        </div>

        <p>
          Perguntas com * serão obrigatórias somente se houver marcado sim para
          adotante ou protetor
        </p>
        <p>Os dados do cadastro poderão ser alterados em qualquer momento</p>

        <div className="flex justify-end mt-8">
          <Button children="Cadastrar" />
        </div>
      </main>
    </>
  );
}
