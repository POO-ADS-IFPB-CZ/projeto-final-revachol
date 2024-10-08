import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { ButtonIcon } from './button-icon'
import { Plus } from 'lucide-react'

export function Modal({children, title, saveOnClick}) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <ButtonIcon onClick={open}>
        <Plus size={16}/>
        Novo
      </ButtonIcon>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/15">
            <DialogPanel
              transition
              className="drop-shadow-md space-y-4 w-full max-w-md rounded-xl bg-secondary p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-lg font-semibold text-primary">
                {title}
              </DialogTitle>
              <div className='flex flex-col gap-2'>
                {children}
              </div>
              <div>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={()=>{
                    saveOnClick()
                    close()
                  }}
                >
                  Salvar
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
