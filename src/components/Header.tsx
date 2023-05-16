import { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import LogoGpai from '../assets/logo-gpai.svg';
import { Button } from './Button';

const navigation = [
  { name: 'Adote', to: '#' },
  { name: 'Doar', to: '#' },
  { name: 'Fazer parte', to: '#' },
  { name: 'Contato', to: '#' },
  { name: 'Sobre', to: '#' },
];

const ProfileDropdownItems = [
  { to: '#', label: 'Seu Perfil' },
  { to: '#', label: 'Configurações' },
  { to: '#', label: 'Sair' },
];

export function Header() {
  const isLogged = false;

  return (
    <Disclosure as="nav" className="bg-accent text-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block font-semibold h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block font-semibold h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center gap-7">
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={LogoGpai}
                    alt="Your Company"
                  />
                  <span className="text-3xl md:text-5xl font-bold">
                    G.P.A.I
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <div className="flex items-center font-semibold  space-x-4">
                    {navigation.map((item) => (
                      <a key={item.name} className="nav-hover" href={item.to}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {isLogged ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {ProfileDropdownItems.map((item, index) => (
                          <Menu.Item key={item.to + index}>
                            <a
                              href={item.to}
                              className="block px-4 py-2 text-sm text-gray-700"
                            >
                              {item.label}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Button.Root className="hidden sm:flex h-8" as="Link">
                    <Button.Label>Entrar</Button.Label>
                  </Button.Root>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-primary sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Button.Root variant="outline" className="h-8" as="Link">
                <Button.Label>Entrar</Button.Label>
              </Button.Root>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
