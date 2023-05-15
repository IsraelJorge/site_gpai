import { Button } from './components/Button';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <Button.Root as="Link">
        <Button.Label>fsdffsdfs</Button.Label>
      </Button.Root>
    </>
  );
}
