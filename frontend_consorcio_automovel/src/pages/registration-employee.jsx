import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"
import { useState } from "react";
import { sellerRegister } from "../utils/sellerRegister";
//import { authentication } from "../utils/login";
import { useAuth } from "../contexts/authContext";

export function RegistrationEmployee() {
  const {user} = useAuth(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [primeiroNome,  setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");

  async function registerAutentication(e) {
    e.preventDefault();
    console.log(user);
    const result = await sellerRegister(username, password, email, primeiroNome, ultimoNome);
    if (result) {
      console.log('Cadastro realizado com sucesso:', result);
    } else {
      console.log('Falha no cadastro', result);
    }
  }
 
  return (
    <Layout>
    <Header />
    
    {/* Verifica se o usuário está logado */}
    {user ? (
      <Main className="flex justify-center items-center sm:items-start sm:pt-24">
        <form onSubmit={registerAutentication} className="flex flex-col gap-2 w-full max-w-screen-sm">
          <h1 className="text-2xl font-semibold">Cadastro de Funcionário</h1>
          <Input
            type="text"
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="primeiro nome"
            onChange={e => setPrimeiroNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder="último nome"
            onChange={e => setUltimoNome(e.target.value)}
          />
          <Input
            type="password"
            placeholder="senha"
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
