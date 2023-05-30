
import Pets from '../assets/pets.png';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Route } from '../utils/Routes';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../context/AuthProvider/useAuth';

const LoginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(6).nonempty(),
});

type Login = z.infer<typeof LoginSchema>;


export function Login() {
  const { register, handleSubmit } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const { authenticate } = useAuth();

  const handleLoginRequest = ({ email, password }: Login) => {
    authenticate({ email, password });
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item to={Route.home}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to=".">Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex items-center md:justify-between">
        <div className="w-1/2 sm: flex-1">
          <img src={Pets} alt="pet" />
        </div>
        <div className="w-full  px-10 sm: flex-1 ">
          <div className="bg-white h-[500px] flex flex-col gap-10 shadow-lg rounded-md shadow-gray-200 p-5">
            <div className="flex justify-center ">
              <h2 className="font-bold text-2xl mb-2 cor-titulo">
                Faça seu Login
              </h2>
            </div>

            <form onSubmit={handleSubmit(handleLoginRequest)}>
              <div className="px-8 mx-4 mb-2">
                  <Input label="Email" {...register('email')} />
              </div>
              <div className="px-8 mx-4 mb-2">
               <Input label="Senha" {...register('password')} />
              </div>
              <div className="px-8 mx-4 mb-2">
                <a
                  href=""
                  className="block font-semibold cor-titulo underline underline-offset-2 py-2"
                >
                  esqueci minha senha
                </a>
                <a
                  href=""
                  className="block font-semibold cor-titulo underline underline-offset-2 pb-2"
                >
                  cadastrar-se
                </a>
              </div>
            </form>
          </div>

        <Button className="w-full">
          <Button.Label>Entrar</Button.Label>
        </Button>
        </div>
      </div>
    </>
  );
}
