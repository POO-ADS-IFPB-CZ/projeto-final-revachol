import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Input } from "../components/input";
import { Layout } from "../components/layout";
import { ButtonIcon } from "../components/button-icon"

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
          <div>
            <ButtonIcon type="submit">Salvar</ButtonIcon>
          </div>
        </form>

      </Main>
      <Footer />

    </Layout>
  );
}
