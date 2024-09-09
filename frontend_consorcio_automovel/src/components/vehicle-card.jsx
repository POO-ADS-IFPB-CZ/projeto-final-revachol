import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Input } from './input'
import photoCart from "../assets/imgs/car.jpg"
import {ButtonIcon} from './button-icon'
import { Save, Trash } from 'lucide-react'

function VehicleCard() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <>
      <div onClick={open} className="w-full relative cursor-pointer vehicle-card">
        <img
          className="w-full"
          src={photoCart}
          alt=""
          srcset="" />

        <div className="p-4 w-full absolute bottom-0 text-white">
          <div className='flex justify-between p-2 backdrop-blur-[2px] rounded border border-primary'>
            <p>Fusca</p>
            <p>10000.00 R$</p>
          </div>
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
                <Input type="text" placeholder="Chassi" value="Monobloco"/>
                <Input type="text" placeholder="Modelo" value="Fusca Turbo"/>
                <Input type="text" placeholder="Nome" value="Fusca"/>
                <Input type="number" placeholder="Preço" value={1000}/>
                <Input type="text" placeholder="Cor" value="Vermelho"/>
                <input type="file" className="bg-primary" />
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

export default VehicleCard;