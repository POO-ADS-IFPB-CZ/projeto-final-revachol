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
import { loadSales } from "../utils/sales/getSales";
import { addSale } from "../utils/sales/addSale";
import { ErrorMessage } from "../components/errorMessage";
import { SucessMessage } from "../components/sucessMessage";

export function Sales() {
  const {user} = useAuth(); 
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [chassi, setChassi] = useState("");
  const [sales, setSales] = useState({ vendas: [] });
  const [filteredSales, setFilteredSales] = useState({ vendas: [] });
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');

  //função que salva a venda
  async function handleSaveSale() {
    setChassi("");
    setCpf("");
    await addSales()
    await refreshSales();
  }

  async function addSales(){
    const result = await addSale(cpf, chassi);
    if(result){
      sucessRequisition("Venda adicionada!");
    } else {
      errorRequisition("Verifique se os valores estão corretos!");
    }
  }

  async function refreshSales(){
    const data = await loadSales(); // Chama a função que busca os veículos
      if (data) {
        setSales(data);
        setFilteredSales(data); 
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


  function handleSearch(value) {
    if (value === '') {
      setFilteredSales(sales);
    } else {
      const filtered = sales.vendas.filter(sale => 
        sale.username_vendedor_id.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSales({ vendas: filtered });    
    }
  }

  function sucessRequisition(message){
    setErrorVisible(false);
    setSucessVisible(true);
    setSucessMessage(message);
  }

  function errorRequisition(message){
    setErrorVisible(true);
    setSucessVisible(false);
    setErrorMessage(message);
  }

  return (
    <Layout>
      <Header onSearchChange={handleSearch}/>
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
          {errorVisible && <ErrorMessage message={errorMessage}/>}
          {sucessVisible && <SucessMessage message={sucessMessage}/>}
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {filteredSales.vendas ? filteredSales.vendas.map((venda) => (
              <SaleCard 
              key={venda.codigo_venda} 
              cliente_id={venda.cpf_cliente_id}
              vendedor_id={venda.username_vendedor_id}
              chassi={venda.chassi_automovel_id}
              codigo_venda={venda.codigo_venda}
              data_venda={venda.data_venda}
              preco={venda.preco}
              sucessRequisition={sucessRequisition}
              errorRequisition={errorRequisition}
              onDeleteSale={refreshSales}
              />
            
          )) : <p>Nenhuma venda encontrada.</p>}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
