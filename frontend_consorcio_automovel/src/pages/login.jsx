import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { login } from "../utils/login";

import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginAutentication(e) {
    e.preventDefault();
    const result = await login(username, password);
    if (result) {
      console.log('Login realizado com sucesso:', result);
    } else {
      console.log('Falha no login', result);
    }
  }

  return (
    <Layout>
      <Header />
      
      <Main className="flex justify-center items-center">

        <form onSubmit={loginAutentication}  className="flex flex-col gap-2 w-full max-w-screen-sm"> 
          <h1 className="text-2xl font-semibold">Login</h1>
          <input
            type="text"
            placeholder="username" 
            onChange={e => setUsername(e.target.value)} 
            />
          <input
            type="password"
            placeholder="senha" 
            onChange={e => setPassword(e.target.value)} 
            />
          <div>
            <ButtonIcon type="submit">Entrar</ButtonIcon>
          </div>
          <p>Não possui conta? <Link to="/cadastro" className="text-primary">Cadastre-se</Link></p>
        </form>

      </Main>
      <Footer />

    </Layout>
  );
}
