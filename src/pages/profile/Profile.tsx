import { Button } from '../../components/Button';
import { DrawerRoot } from '../../components/Drawer';
import { Input } from '../../components/Input';
import user from '../assets/User.png';
import { Description } from '../../components/Description';
import imgUser from '../assets/Frame 46.png';
import icoPet from '../assets/icon_pet.png';
import { DrawerIten } from '../../components/DrawerIten';
export function Profile() {
  return (
    <>
    <div className='flex gap-4'>
      <DrawerRoot>
        <div className='flex flex-col items-center pb-4'>
          <img src={imgUser} alt="icone de perfil"/>
          <p className='text-white'>User20963</p>
        </div>
        <DrawerIten image={user} conteudo='Ver Perfil'/>
        <DrawerIten image={icoPet} conteudo='Meus Pets'/> 

      </DrawerRoot>
      <main className='w-full'>
        <div className='flex'>
          <img src={imgUser} alt="imagem de perfil" />
          <h1 className='text-center text-2xl font-semibold w-full'>Perfil</h1>
        </div>
        <Description nome='Nome:' conteudo='NomeGenerico com SobrenomeGenerico' />

        <Description nome='CPF:' conteudo='000111222-33'/>

        <Description nome='Telefone:' conteudo='99 99021923'/>

        <Description nome='Endereço:' conteudo='Av.Limoeiro, nº 1000, Bairro Generico'/>

        <Description nome='Relação com a ONG:' conteudo='Adotante'/>
        <div className='flex justify-end py-10'>
          <Button children='Editar Perfil'/>
        </div>
      </main>
    </div>
    </>
  );
}
