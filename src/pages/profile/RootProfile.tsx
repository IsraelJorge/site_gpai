import imgUser from '../../assets/Frame 46.png';

import { Drawer } from '../../components/Drawer';

import { Outlet } from 'react-router-dom';
import { Route } from '../../utils/Routes';

export function RootProfile() {
  return (
    <div className="flex gap-4">
      <Drawer>
        <div className="flex flex-col items-center pb-4">
          <img src={imgUser} alt="icone de perfil" />
          <p className="text-white">User20963</p>
        </div>
        <Drawer.Item to="." iconName="BsPersonFill" label="Ver Perfil" />
        <Drawer.Item to={Route.myPets} iconName="FaPaw" label="Meus Pets" />
        <Drawer.Item to={Route.donations} iconName="FaDonate" label="Doações" />
        <Drawer.Item to={Route.adopters} iconName="FaUsers" label="Adotantes" />
        <Drawer.Item to={Route.animals} iconName="FaPaw" label="Animais " />
      </Drawer>

      <div className="w-full px-5 pt-4">
        <Outlet />
      </div>
    </div>
  );
}
