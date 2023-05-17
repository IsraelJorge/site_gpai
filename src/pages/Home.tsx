import { Card } from '../components/Card';

export function Home() {
  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-between gap-1">
        {new Array(8).fill('').map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
}
