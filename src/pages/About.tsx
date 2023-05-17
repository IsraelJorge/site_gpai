import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function About() {
  return (
    <>
      <h1>Sobre</h1>

      <div className="p-10">
        <Input label="Nome" name="name" />

        <Input label="Telefone" name="cell" />

        <Input label="asda" name="qweqwe" />

        <Button variant="outline" className="w-44">
          <Button.Label>Entrar</Button.Label>
        </Button>
      </div>
    </>
  );
}
