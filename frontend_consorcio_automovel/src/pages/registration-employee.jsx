import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";

export function RegistrationEmployee() {
  return (
    <Layout>
      <Header />
      <Main className="flex justify-center items-center sm:items-start sm:pt-24">

        <form className="flex flex-col gap-2 w-full max-w-screen-sm">
          <h1 className="text-2xl font-semibold">Cadastro de funcionario</h1>
          <Input
            type="text"
            placeholder="nome" />
          <Input
            type="email"
            placeholder="email" />
            <Input
            type="text"
            placeholder="CPF" />
            <Input
            type="text"
            placeholder="endereço" />
            <Input
            type="text"
            placeholder="telefone" />
          <Input
            type="password"
            placeholder="senha" />
          <button
            className="self-start min-w-28 bg-primary text-secondary border border-primary rounded py-1 px-2 transition duration-300 hover:text-primary hover:bg-transparent"
            type="submit">Salvar</button>
        </form>

      </Main>
      <Footer />

    </Layout>
  );
}
