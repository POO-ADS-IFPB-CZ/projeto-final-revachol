import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Input } from './input'
import { ButtonIcon } from './button-icon'
import { Save, Trash } from 'lucide-react'
import photoCart from "../assets/imgs/car.jpg"
import { useAuth } from '../contexts/authContext'
import { TextLocked } from './text-locked'
import { deleteVehicles } from '../utils/vehicles/deleteVehicle'
import { updateVehicles } from '../utils/vehicles/updateVehicle'

function VehicleCard({ nome, cor, chassi, preco, modelo, onChangeVehicle }) {
  const { user } = useAuth();
  const [nomeCarro, setNomeCarro] = useState(nome);
  const [corCarro, setCor] = useState(cor);
  const [precoCarro, setPreco] = useState(preco);
  const [modeloCarro, setModelo] = useState(modelo);


  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  async function updateVehicleFunction() {
    await updateVehicles(chassi, modeloCarro, nomeCarro, precoCarro, corCarro)
    onChangeVehicle();
    
  }

  async function deleteVehicleFunction(){
      await deleteVehicles(chassi);
      onChangeVehicle();
  }
  return (
    <>
      <div onClick={open} className="w-full relative cursor-pointer vehicle-card">
        <img
          className="w-full"
          src={photoCart}
          alt=""
          srcSet="" />

        <div className="p-4 w-full absolute bottom-0 text-white">
          <div className='flex justify-between p-2 backdrop-blur-[2px] rounded border border-primary'>
            <p>{nome}</p>
            <p>{preco}</p>
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

              {user ?
                <div className='flex flex-col gap-2'>
                  <TextLocked >Chassi: {chassi}</TextLocked>
                  <Input type="text" placeholder="Modelo" 
                  value={modeloCarro} 
                  onChange={e => setModelo(e.target.value)}
                  />
                  <Input type="text" placeholder="Nome" 
                  value={nomeCarro} 
                  onChange={e => setNomeCarro(e.target.value)}
                  />
                  <Input type="number" placeholder="Preço" 
                  value={precoCarro} 
                  onChange={e => setPreco(e.target.value)}
                  />
                  <Input type="text" placeholder="Cor" 
                  value={corCarro} 
                  onChange={e => setCor(e.target.value)}
                  />
                </div>
                :   <div className='flex flex-col gap-2'>
                  <TextLocked >Chassi: {chassi}</TextLocked>
                  <TextLocked >Modelo: {modeloCarro}</TextLocked>
                  <TextLocked >Nome: {nomeCarro}</TextLocked>
                  <TextLocked >Preco: {precoCarro}</TextLocked>
                  <TextLocked >Cor: {corCarro}</TextLocked>


                  </div>}


              {user && <div className='flex justify-between'>

                <ButtonIcon onClick={updateVehicleFunction}>
                  <Save size={16} />
                  Salvar
                </ButtonIcon>
                <ButtonIcon style="danger" onClick={deleteVehicleFunction}>
                  <Trash size={16} />
                  Excluir
                </ButtonIcon>
              </div>}


            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default VehicleCard;