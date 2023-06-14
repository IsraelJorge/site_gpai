import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Pets from '../assets/pets.png';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Main } from '../components/layouts/Main';
import { useAuth } from '../context/AuthProvider/useAuth';
import { Route } from '../utils/Routes';


const LoginSchema = z.object({
  email: z.string().email('Email inválido.').nonempty(),
  password: z
    .string()
    .min(6, 'Senha deve ter no minimo 6 caracteres.')
    .nonempty(),
});

type Login = z.infer<typeof LoginSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const { authenticate } = useAuth();

  const handleLoginRequest = ({ email, password }: Login) => {
    authenticate({ email, password });
  };

  return (
    <Main>
      <Breadcrumb>
        <Breadcrumb.Item to={Route.home}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to=".">Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex items-center md:justify-between">
        <div className="w-1/2 sm: flex-1">
          <img src={Pets} alt="pet" />
        </div>
        <div className="w-full px-10 sm: flex-1 ">
          <div className="bg-white h-[500px] flex flex-col gap-10 shadow-lg rounded-md shadow-gray-200 p-5">
            <div className="flex justify-center ">
              <h2 className="font-bold text-2xl mb-2 cor-titulo">
                Faça seu Login
              </h2>
            </div>

            <form onSubmit={handleSubmit(handleLoginRequest)} id="form-login">
              <div className="px-8 mx-4 mb-2">
                <Input label="Email" {...register('email')}>
                  <Input.Error message={errors.email?.message} />
                </Input>
              </div>
              <div className="px-8 mx-4 mb-2">
                <Input label="Senha" type="password" {...register('password')}>
                  <Input.Error message={errors.password?.message} />
                </Input>
              </div>
              <div className="px-8 mx-4 mb-2">
                <a
                  href=""
                  className="block font-semibold cor-titulo underline underline-offset-2 py-2"
                >
                  esqueci minha senha
                </a>
                <Link
                  to={Route.userRegistration}
                  className="block font-semibold cor-titulo underline underline-offset-2 pb-2"
                >
                  cadastrar-se
                </Link>
              </div>
            </form>
          </div>
          <Button className="w-full mt-5" buttonProps={{ form: 'form-login' }}>
            <Button.Label>Entrar</Button.Label>
          </Button>
        </div>
      </div>
    </Main>
  );
}
