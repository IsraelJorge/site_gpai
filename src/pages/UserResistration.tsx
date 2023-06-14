import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Main } from '../components/layouts/Main';
import { useUserCreate } from '../services/datasources/hooks/useUserCreate';
import {
  UserForm,
  UserSchema,
} from '../services/datasources/schemas/UserSchema';

export function UserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserSchema),
  });

  const { mutate } = useUserCreate();

  const handleSubmitData = (data: UserForm) => {
    mutate(data);
  };

  return (
    <Main>
      <main className="p-5 pb-10 text-primary ">
        <Breadcrumb>
          <Breadcrumb.Item to="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item to=".">Cadastro</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-4xl font-bold my-3">Formulário de Cadastro</h1>

        <form onSubmit={handleSubmit(handleSubmitData)} className="mt-10">
          <input
            type="hidden"
            {...register('roleId', {
              value: 2,
            })}
          />
          <div className="flex flex-wrap md:gap-4">
            <Input
              label="Nome completo"
              className="flex-1"
              {...register('name')}
            >
              <Input.Error message={errors.name?.message} />
            </Input>
            <Input label="Email" className="flex-1" {...register('email')}>
              <Input.Error message={errors.email?.message} />
            </Input>
            <Input
              label="Senha"
              type="password"
              className="flex-1"
              {...register('password')}
            >
              <Input.Error message={errors.password?.message} />
            </Input>
          </div>

          <div className="flex flex-wrap md:gap-4">
            <Input
              label="Telefone"
              className="flex-1"
              mask="phone"
              {...register('telephone')}
            >
              <Input.Error message={errors.telephone?.message} />
            </Input>
            <Input
              label="CPF"
              className="flex-1"
              mask="cpf"
              {...register('cpf')}
            >
              <Input.Error message={errors.cpf?.message} />
            </Input>
          </div>

          <Input label="Endereço" {...register('address')}>
            <Input.Error message={errors.address?.message} />
          </Input>

          <div className="flex mt-8">
            <Button
              className="w-full max-w-xs"
              buttonProps={{ type: 'submit' }}
            >
              <Button.Label>Cadastrar</Button.Label>
            </Button>
          </div>
        </form>
      </main>
    </Main>
  );
}
