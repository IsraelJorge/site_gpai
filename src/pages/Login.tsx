import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
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
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(handleLoginRequest)}>
        <Input label="Email" {...register('email')} />
        <Input label="Senha" {...register('password')} />
        <Button>
          <Button.Label>Entrar</Button.Label>
        </Button>
      </form>
    </>
  );
}
