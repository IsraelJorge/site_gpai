import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Pets from "../assets/pets.png";

export function Login() {
  return (
    <>
      <div className="flex items-center md:justify-between">
            <div className="w-1/2 sm: flex-1">
                <img src={Pets} alt="pet" />
            </div>
            <div className=" w-full px-10 sm: flex-1 ">
                <div className="bg-white flex flex-col shadow-lg rounded-md shadow-gray-200 p-5">
                    <div className="flex justify-center">
                        <h2 className="font-bold text-2xl mb-2 cor-titulo">Faça seu Login</h2>
                    </div>

                    <form action="" className="">
                        <div className="px-8 mx-4 mb-2">
                            <Input label="email" name="emailInput" type="email" className="font-semibold pb-1"/>
                        </div>
                        <div className="px-8 mx-4 mb-2">
                            <Input label="Senha" name="senhaInput" className="font-semibold pb-1"/>
                        </div>
                        <div className="px-8 mx-4 mb-2">
                            <a href="" className="block font-semibold cor-titulo underline underline-offset-2 py-2">esqueci minha senha</a>
                            <a href="" className="block font-semibold cor-titulo underline underline-offset-2 pb-2">cadastrar-se</a>
                        </div>
                    </form>
                
                </div>
              
                <Button children="Entrar" className="w-full mt-5 py-3 mb-6 bg-footer" to="" />
            </div>
        </div>
    </>
  );
}
