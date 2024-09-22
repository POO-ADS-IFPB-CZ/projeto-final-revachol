import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ButtonIcon } from './button-icon';
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
import { TextLocked } from './text-locked';
import { deleteSale } from '../utils/deleteSale';

export function SaleCard({cliente_id, vendedor_id, chassi, codigo_venda, data_venda, preco, onDeleteSale}) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  async function deleteSaleFunction() {
    await deleteSale(codigo_venda);
    onDeleteSale();
  }

  return (
    <>
      <div className="bg-secondary p-4 flex gap-4">
        <div className="flex-grow">
          <div className="flex justify-between">
            <p>{cliente_id}</p>
            <p>{vendedor_id}</p>
          </div>
          <p className='text-sm'>{chassi}</p>
        </div>
        <div 
          onClick={open} 
          className="bg-primary text-white w-12 h-12 rounded-full cursor-pointer flex justify-center items-center hover:text-white hover:bg-indigo-400">
          <Eye />
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
                <TextLocked>{vendedor_id}</TextLocked>

                <h1 className='font-semibold text-sm mt-2'>Cliente</h1>
                <TextLocked>{cliente_id}</TextLocked>
    
                <h1 className='font-semibold text-sm mt-2'>Veiculo</h1>
                <TextLocked >{chassi}</TextLocked>
      
                <h1 className='font-semibold text-sm mt-2'>Compra</h1>
                <TextLocked >{codigo_venda}</TextLocked>
                <TextLocked >{data_venda}</TextLocked>
                <TextLocked >{preco}</TextLocked>

              </div>

              <div className='flex justify-between'>
                <ButtonIcon style="danger" onClick={deleteSaleFunction}>
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
