import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";

export function Vehicles() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Layout>
      <Header />
      <Main>
        <section>
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-semibold text-primary">Veiculos</h1>
            <Modal title="Adicionar veículo">
              <Input type="text" placeholder="Chassi" />
              <Input type="text" placeholder="Modelo" />
              <Input type="text" placeholder="Nome" />
              <Input type="number" placeholder="Preço" />
              <Input type="text" placeholder="Cor" />
            </Modal>
          </div>
          
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto">
            {array.map(num => (
              <div key={num} className="mx-auto border p-4 bg-tertiary w-full">
                <h1>Veículos</h1>
                <p>Aqui você encontra todos os veículos cadastrados.</p>
              </div>
            ))}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
