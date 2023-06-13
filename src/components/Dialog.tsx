import { Dialog as Box, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { useDialog } from '../context/DialogProvider';
import { Button } from './Button';
import { Icon } from './Icon';

export const Dialog = () => {
  const { current, closeDialog } = useDialog();
  const open = current?.open === true;

  return (
    <Transition appear show={open} as={Fragment}>
      <Box as="div" className="relative z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Box.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {current ? (
                  <div className="flex flex-col gap-2">
                    <Box.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {current.title}
                    </Box.Title>
                    {current.message ? (
                      <div className="mt-2">
                        <Box.Description
                          as="p"
                          className="text-md text-gray-500"
                        >
                          {current.message}
                        </Box.Description>
                      </div>
                    ) : null}
                    <div className="mt-4 flex gap-3 flex-row justify-end">
                      {current.buttons.map((button, idx) => (
                        <Button
                          key={button.label}
                          variant={button.type}
                          onClick={() => {
                            closeDialog();
                            button.onClick?.();
                          }}
                          data-testid={`dialog-button-${idx}`}
                        >
                          <Button.Label>{button.label}</Button.Label>
                          {button.icon ? (
                            <Icon name={button.icon} size={20} />
                          ) : null}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Box.Panel>
            </Transition.Child>
          </div>
        </div>
      </Box>
    </Transition>
  );
};
