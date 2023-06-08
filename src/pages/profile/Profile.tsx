import imgUser from '../../assets/Frame 46.png';

import { Button } from '../../components/Button';
import { Description } from '../../components/Description';

export function Profile() {
  return (
    <main className="w-full">
      <div className="flex">
        <img src={imgUser} alt="imagem de perfil" />
        <h1 className="text-center text-2xl font-semibold w-full">Perfil</h1>
      </div>
      <Description label="Nome:" content="NomeGenerico com SobrenomeGenerico" />

      <Description label="CPF:" content="000111222-33" />

      <Description label="Telefone:" content="99 99021923" />

      <Description
        label="Endereço:"
        content="Av.Limoeiro, nº 1000, Bairro Generico"
      />

      <Description label="Relação com a ONG:" content="Adotante" />
      <div className="flex justify-end py-10">
        <Button children="Editar Perfil" />
      </div>
    </main>
  );
}
