import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Input } from './input';
import { ButtonIcon } from './button-icon';
import { Check, Save, Trash } from "lucide-react";
import { useState } from "react";

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
              <div className='flex flex-col gap-2'>
                <Input type="text"  value="Vendedor Islan" disabled={true}/>
                <Input type="text"  value="Cliente Marcena" disabled={true}/>
                <Input type="text" value="Fusca" disabled={true}/>
                <Input type="number" placeholder="Preço" value={1000} disabled={true}/>
                <div className='flex gap-2'>
                  <Input type="checkbox" placeholder="Cor" value="Vermelho" id="pago"/>
                  <label htmlFor="pago">
                    Pago
                  </label>
                </div>
              </div>

              <div className='flex justify-between'>
                <ButtonIcon onClick={close}>
                  <Save size={16}/>
                  Salvar
                </ButtonIcon>
                <ButtonIcon style="danger" onClick={close}>
                  <Trash size={16}/>
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
