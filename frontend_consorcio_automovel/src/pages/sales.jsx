import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";

import { SaleCard } from "../components/sale-card";

export function Sales() {
  const vendas = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]
  return (
    <Layout>
      <Header />
      <Main>
        <section className="space-y-4">
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-primary">Vendas</h1>
            <Modal title="Realizar venda">
              <Input type="text" placeholder="CPF do cliente" />
              <Input type="text" placeholder="CPF do vendedor" />
              <Input type="date" />
              <Input type="text" placeholder="Chassi" />
            </Modal> 
          </div>
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {vendas.map(venda => (
              <SaleCard key={venda.id} />
            ))}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
