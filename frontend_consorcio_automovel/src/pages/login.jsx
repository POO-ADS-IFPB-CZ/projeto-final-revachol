import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { login } from "../utils/login";
import { Input } from "../components/input";
import { useState } from "react";
import { ErrorMessage } from "../components/errorMessage";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function loginAutentication(e) {
    e.preventDefault();
    const result = await login(username, password);
    setVisible(false);
    if (result) {
      console.log('Login realizado com sucesso:', result);
      navigate('/');
    } else {
      console.log('Falha no login', result);
      setPassword("");
      setUsername("");
      setErrorMessage("Usuário ou senha incorretos");
      setVisible(true);
    }
  }


  return (
    <Layout>
      <Header />
      
      <Main className="flex justify-center items-center">
      
        <form onSubmit={loginAutentication}  className="flex flex-col gap-2 w-full max-w-screen-sm"> 
        {visible && <ErrorMessage message={errorMessage}/>}
          <h1 className="text-2xl font-semibold">Login</h1>
          <Input
            type="text"
            placeholder="username" 
            onChange={e => setUsername(e.target.value)} 
            />
          <Input
            type="password"
            placeholder="senha" 
            onChange={e => setPassword(e.target.value)} 
            />
          <div>
            <ButtonIcon type="submit">Entrar</ButtonIcon>
          </div>
          
          
        </form>
        

      </Main>
      <Footer />

    </Layout>
  );
}
