import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"

export function Login() {
  return (
    <Layout>
      <Header />
      <Main className="flex justify-center items-center">

        <form className="flex flex-col gap-2 w-full max-w-screen-sm">
          <h1 className="text-2xl font-semibold">Login</h1>
          <Input
            type="email"
            placeholder="email" />
          <Input
            type="password"
            placeholder="senha" />
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
