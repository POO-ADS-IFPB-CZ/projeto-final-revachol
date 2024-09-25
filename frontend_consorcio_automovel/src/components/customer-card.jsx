import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ButtonIcon } from './button-icon';
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
import { TextLocked } from './text-locked';
import { deleteCustomer } from '../utils/commonUser/deleteCustomer';
import { Input } from './input';
import { Save } from 'lucide-react';
import { updateCustomer } from '../utils/commonUser/updateCustomer';

export function CustomerCard({cpf, nome, email, telefone, endereco, onChangeCustomer, sucessRequisition, errorRequisition}) {
  let [isOpen, setIsOpen] = useState(false)
  const [nameCliente, setNome] = useState(nome);
  const [telefoneCliente, setTelefone] = useState(telefone);
  const [emailCliente, setEmail] = useState(email);
  const [enderecoCLiente, setEndereco] = useState(endereco);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  async function deleteSaleFunction() {
    const result = await deleteCustomer(cpf);
    if (result){
      sucessRequisition("Cliente deletado!");
    } else {
      errorRequisition("Falha na remoção do cliente!");
    }
    onChangeCustomer();
    close();
  }

  async function updateCustomerFunction() {
    if(nameCliente && emailCliente && telefoneCliente && enderecoCLiente) {
      const result = await updateCustomer(cpf, nameCliente.trim(), emailCliente.trim(), enderecoCLiente.trim(), telefoneCliente.trim())
      if(result){
        onChangeCustomer();
        sucessRequisition("Cliente atualizado!");
      } else {
        errorRequisition("Falha na atualização!");
      }
      close();
    }
    
  }




  return (
    <>
      <div className="bg-secondary p-4 flex gap-4">
        <div className="flex-grow">
          <div className="flex justify-between">
            <p>{nome}</p>
            <p></p>
          </div>
          <p className='text-sm'>{cpf}</p>
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
                Dados do cliente
              </DialogTitle>
              <div className='flex flex-col gap-2 max-h-[70vh] overflow-y-auto'>
                  <TextLocked >CPF: {cpf}</TextLocked>
                  <Input type="text" placeholder="Nome" 
                  value={nameCliente} 
                  onChange={e => setNome(e.target.value)}
                  />
                  <Input type="text" placeholder="Email" 
                  value={emailCliente} 
                  onChange={e => setEmail(e.target.value)}
                  />
                  <Input type="text" placeholder="Telefone" 
                  value={telefoneCliente} 
                  onChange={e => setTelefone(e.target.value)}
                  />
                  <Input type="text" placeholder="Endereço" 
                  value={enderecoCLiente} 
                  onChange={e => setEndereco(e.target.value)}
                  />
              </div>
              <div className='flex justify-between'>
                <ButtonIcon onClick={updateCustomerFunction}>
                  <Save size={16} />
                  Salvar
                </ButtonIcon>
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
