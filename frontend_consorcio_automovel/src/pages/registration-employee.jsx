import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { useState } from "react";
import { sellerRegister } from "../utils/userSeller/sellerRegister";
//import { authentication } from "../utils/login";
import { useAuth } from "../contexts/authContext";
import { ErrorMessage } from "../components/errorMessage";
import { SucessMessage } from "../components/sucessMessage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RegistrationEmployee() {
  const {user} = useAuth(); 
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [primeiroNome,  setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  async function registerAutentication(e) {
    e.preventDefault();
    
    const result = await sellerRegister(username, password, email, primeiroNome, ultimoNome);
    if (result) {
      console.log('Cadastro realizado com sucesso:', result);
      cleanInputs();
      setErrorVisible(false);
      setSucessVisible(true);
    } else {
      console.log('Falha no cadastro', result);
      setErrorVisible(true);
      setSucessVisible(false);
      setPassword("");
      setErrorMessage("Falha no cadastro, tente novamente!");
    }
  }

  function cleanInputs(){
    setEmail("");
    setPassword("");
    setPrimeiroNome("");
    setUltimoNome("");
    setUsername("");
  }

  useEffect(() => {
    const checkLogin = () => {
      if(!user) {
        navigate('/login');
      }
    }
    checkLogin();
  },[navigate, user]);

  return (
    <Layout>
    <Header />
    
    {/* Verifica se o usuário está logado */}
    {user ? (
      <Main className="flex justify-center items-center sm:items-start sm:pt-24">
       
        <form onSubmit={registerAutentication} className="flex flex-col gap-2 w-full max-w-screen-sm">
        {errorVisible && <ErrorMessage message={errorMessage}/>}
        {sucessVisible && <SucessMessage message="Funcionário cadastrado!"/>}
          <h1 className="text-2xl font-semibold">Cadastro de Funcionário</h1>
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="primeiro nome"
            value={primeiroNome}
            onChange={e => setPrimeiroNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder="último nome"
            value={ultimoNome}
            onChange={e => setUltimoNome(e.target.value)}
          />
          <Input
            type="password"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
          <p className="mt-2">Você precisa estar logado para cadastrar funcionários.</p>
        </div>
      </Main>
    )}

    <Footer />
  </Layout>
  );
}
