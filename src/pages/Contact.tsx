import { Breadcrumb } from '../components/Breadcrumb';
import { Main } from '../components/layouts/Main';
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

export function Contact() {
  return (
    <Main>
      <Breadcrumb>
        <Breadcrumb.Item to='/'>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item to='.'>Contato</Breadcrumb.Item>
      </Breadcrumb>
      <section className='flex items-center flex-col '>
        <h1 className='font-semibold text-xl'>Entre em Contato</h1>
        <div className= 'flex flex-col items-center gap-5 shadow-lg rounded-md shadow-gray-200 m-10'>
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
              <p>Telefone: (99) 99122-3344</p>
              <p>E-mail: gpai@email.com</p>
              <p>Endereço: Av.Solimões, Nº 1000, Limoeiro</p>
            </div> 
          </div>
        </div>
      </section>
    </Main>
  );
}
