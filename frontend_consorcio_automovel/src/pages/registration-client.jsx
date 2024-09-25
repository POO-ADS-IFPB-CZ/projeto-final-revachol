import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { customerRegister } from "../utils/commonUser/customerRegister";
import { useState } from "react";
import { SucessMessage } from "../components/sucessMessage";
import { ErrorMessage } from "../components/errorMessage";
import { useAuth } from "../contexts/authContext";

export function RegistrationClient() {
  const {user} = useAuth(); 

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  async function registerCustomer(e) {
    e.preventDefault();
    
    const result = await customerRegister(name.trim(), cpf.trim(), telefone.trim(), email.trim(), endereco.trim());
    if (result) {
      console.log('Cadastro realizado com sucesso:', result);
      cleanInputs();
      setErrorVisible(false);
      setSucessVisible(true);
    } else {
      console.log('Falha no cadastro', result);
      setErrorVisible(true);
      setSucessVisible(false);
      cleanInputs();
      setErrorMessage("Falha no cadastro, tente novamente!");
    }
  }

  function cleanInputs(){
    setName("");
    setEmail("");
    setCpf("");
    setEndereco("");
    setTelefone("");
  }

  return (
    <Layout>
      <Header />
      {user ? (
      <Main className="flex justify-center items-center sm:items-start sm:pt-24">
        <form onSubmit={registerCustomer}  className="flex flex-col gap-2 w-full max-w-screen-sm">
          <h1 className="text-2xl font-semibold">Cadastro de cliente</h1>
          {errorVisible && <ErrorMessage message={errorMessage}/>}
          {sucessVisible && <SucessMessage message="Cliente cadastrado!"/>}
          <Input
            type="text"
            placeholder="nome" 
            value={name}
            onChange={e => setName(e.target.value)}/>
          <Input
            type="email"
            placeholder="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}/>
          <Input
            type="text"
            placeholder="CPF" 
            maxLength={14}
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            />
          <Input
            type="text"
            placeholder="endereço" 
            value={endereco}
            onChange={e => setEndereco(e.target.value)}/>
          <Input
            type="text"
            placeholder="telefone" 
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            />
          <div>
            <ButtonIcon type="submit">Salvar</ButtonIcon>
          </div>
        </form>
      </Main>
      ) : (
        <Main className="flex justify-center items-center sm:items-start sm:pt-24">
          <div className="bg-red-200 text-red-700 p-4 rounded">
            <h2 className="text-2xl font-semibold">Acesso Restrito</h2>
          </div>
        </Main>
      )}
      <Footer />

    </Layout>
  );
}
