import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";

export function Home() {
  return (
    <Layout>
      <Header />
      <Main className="flex flex-col justify-center items-center background-home">
        <p className="text-lg text-slate-500">@nomedosite</p>
        <h1 className="text-5xl text-primary font-bold drop-shadow-2xl ">Encontre o seu proximo veiculo!</h1>
        <p className="text-xl text-slate-300">Navegue pela nossa seleção de veículos e encontre o perfeito para as suas necessidades.</p>
      </Main>
      <Footer />
    </Layout>
  );
}
