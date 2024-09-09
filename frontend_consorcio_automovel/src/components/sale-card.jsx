import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ButtonIcon } from './button-icon';
import { Check, Trash } from "lucide-react";
import { useState } from "react";
import { TextLocked } from './text-locked';

export function SaleCard() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <div onClick={open} className="bg-secondary p-4 flex gap-4">
        <div className="flex-grow">
          <div className="flex justify-between">
            <p>Cliete</p>
            <p>Vendedor</p>
          </div>
          <p>Fusca</p>
        </div>
        <div className="bg-green-700 text-white w-12 h-12 rounded-full flex justify-center items-center">
          <Check />
        </div>
      </div>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/15">
            <DialogPanel
              transition
              className="drop-shadow-md space-y-4 w-full max-w-md rounded-xl bg-secondary p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg font-semibold text-primary">
                Fixa técnica
              </DialogTitle>
              <div className='flex flex-col gap-2 max-h-[70vh] overflow-y-auto'>

                <h1 className='font-semibold text-sm mt-2'>Funcionario</h1>
                <TextLocked>Islan</TextLocked>
                <TextLocked>marcena.gmail.com</TextLocked>
                <TextLocked>111.222.333-50</TextLocked>
                <TextLocked>Cajazeira - PB, numero 123</TextLocked>
                <TextLocked>83 09779-9779</TextLocked>

                <h1 className='font-semibold text-sm mt-2'>Cliente</h1>
                <TextLocked>Cliente Marcena</TextLocked>
                <TextLocked>marcena.gmail.com</TextLocked>
                <TextLocked>111.222.333-50</TextLocked>
                <TextLocked>Cajazeira - PB, numero 123</TextLocked>
                <TextLocked>83 09779-9779</TextLocked>

                <h1 className='font-semibold text-sm mt-2'>Veiculo</h1>
                <TextLocked >Fusca</TextLocked>
                <TextLocked >Fusca turbo pro</TextLocked>
                <TextLocked >19999.00 RS</TextLocked>
                <TextLocked >Vermelho</TextLocked>
              </div>

              <div className='flex justify-between'>
                <ButtonIcon style="danger" onClick={close}>
                  <Trash size={16} />
                  Excluir
                </ButtonIcon>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
