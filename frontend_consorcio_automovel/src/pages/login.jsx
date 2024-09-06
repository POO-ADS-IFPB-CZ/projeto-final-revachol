import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import { Main } from "../components/main";
import { Input } from "../components/input";

export function Login() {
  return (
    <div className="min-h-screen flex flex-col">
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
          <button
            className="self-start min-w-28 bg-primary text-secondary border border-primary rounded py-1 px-2 transition duration-300 hover:text-primary hover:bg-transparent"
            type="submit">Enter</button>
          <p>Não possui conta? <Link to="/cadastro" className="text-primary">Cadastre-se</Link></p>
        </form>

      </Main>
      <Footer />

    </div>
  );
}
