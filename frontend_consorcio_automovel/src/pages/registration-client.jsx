import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { customerRegister } from "../utils/commonUser/customerRegister";
import { useEffect, useState } from "react";
import { SucessMessage } from "../components/sucessMessage";
import { ErrorMessage } from "../components/errorMessage";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";


export function RegistrationClient() {
  const {user} = useAuth(); 
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkLogin = () => {
      if(!user) {
        navigate('/login');
      }
    }
    checkLogin();
  },[navigate, user]);

  async function registerCustomer(e) {
    e.preventDefault();
    
    const result = await  customerRegister(name, cpf, telefone, email, endereco);
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
         {errorVisible && <ErrorMessage message={errorMessage}/>}
         {sucessVisible && <SucessMessage message="Cliente cadastrado!"/>}
          <h1 className="text-2xl font-semibold">Cadastro de cliente</h1>
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
        // Exibe mensagem caso o usuário não esteja logado
        <Main className="flex justify-center items-center sm:items-start sm:pt-24">
          <div className="bg-red-200 text-red-700 p-4 rounded">
            <h2 className="text-2xl font-semibold">Acesso Restrito</h2>
            <p className="mt-2">Você precisa estar logado para cadastrar Clientes</p>
          </div>
        </Main>
      )}
      <Footer />

    </Layout>
  );
}
