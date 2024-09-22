import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SaleCard } from "../components/sale-card";
import { useAuth } from "../contexts/authContext";
import { loadSales } from "../utils/getSales";
import { addSale } from "../utils/addSale";


export function Sales() {
  const {user} = useAuth(); 
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [chassi, setChassi] = useState("");
  const [sales, setSales] = useState({ vendas: [] });


  //função que salva a venda
  async function handleSaveSale() {
    setChassi("");
    setCpf("");
    await addSales()
    await refreshSales();
  }

  async function addSales(){
    const result = addSale(cpf, chassi);
    if(result){
      console.log("Cadastro bem sucedido");
    } else {
      console.log("erro");
    }
  }

  async function refreshSales(){
    const data = await loadSales(); // Chama a função que busca os veículos
      if (data) {
        setSales(data); // Atualiza o estado com os dados retornados
      }
  }
  useEffect(() => {
    refreshSales();
  }, []);

  useEffect(() => {
    const checkLogin = () => {
      if(!user) {
        navigate('/login');
      }
    }
    checkLogin();
  },[navigate, user]);

  return (
    <Layout>
      <Header />
      <Main>
        <section className="space-y-4">
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-primary">Vendas</h1>
            <Modal title="Realizar venda" saveOnClick={handleSaveSale}>
              <Input type="text" placeholder="CPF do cliente" 
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              />
              <Input type="text" placeholder="Chassi" 
              value={chassi}
              onChange={e => setChassi(e.target.value)}
              />
            </Modal> 
          </div>
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {sales.vendas ? sales.vendas.map((venda) => (
              <SaleCard 
              key={venda} 
              cliente_id={venda.cpf_cliente_id}
              vendedor_id={venda.username_vendedor_id}
              chassi={venda.chassi_automovel_id}
              codigo_venda={venda.codigo_venda}
              data_venda={venda.data_venda}
              preco={venda.preco}
              />
            
          )) : <p>Nenhuma venda encontrada.</p>}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
