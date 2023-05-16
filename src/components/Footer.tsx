import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

import LogoGpai from '../assets/logo-white.svg';

const iconsItems = [
  {
    to: '/',
    Icon: <BsInstagram />,
  },
  {
    to: '/',
    Icon: <FiFacebook />,
  },
  {
    to: '/',
    Icon: <BsWhatsapp />,
  },
  {
    to: '/',
    Icon: <FiTwitter />,
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-10 bg-primary text-neutral ">
      <div className="footer max-w-7xl">
        <div>
          <span className="footer-title opacity-100 base-100">ADOTE</span>
          <a className="link link-hover">Adote com responsabilidade</a>
          <a className="link link-hover">Pesquisar animais</a>
        </div>
        <div>
          <span className="footer-title opacity-100 base-100">COLABORE</span>
          <a className="link link-hover">Doe qualquer valor</a>
        </div>
        <div>
          <span className="footer-title opacity-100 base-100">
            DIVULGUE UM ANIMAL
          </span>
          <a className="link link-hover">Cadastrar animal</a>
        </div>

        <div>
          <span className="footer-title opacity-100 base-100">PERFIL</span>
          <a className="link link-hover">Minha página de perfil</a>
          <a className="link link-hover">Cadastre-se</a>
        </div>
      </div>
      <div className="footer gap-5 footer-center py-5">
        <div>
          <div className="grid grid-flow-col text-xl gap-4">
            {iconsItems.map((item, index) => (
              <a
                key={item.to + index}
                className="cursor-pointer"
                href={item.to}
              >
                {item.Icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <a href="/">
            <img
              className="hidden text-red-700 h-12 w-auto lg:block"
              src={LogoGpai}
              alt="Logo G.P.A.I"
            />
          </a>
          <p>Copyright © 2023 </p>
        </div>
      </div>
    </footer>
  );
}
