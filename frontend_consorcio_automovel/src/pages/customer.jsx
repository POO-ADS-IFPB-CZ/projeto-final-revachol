import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Layout } from "../components/layout";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { ErrorMessage } from "../components/errorMessage";
import { SucessMessage } from "../components/sucessMessage";
import { loadCustomer } from "../utils/commonUser/getCustomer";
import { CustomerCard } from "../components/customer-card";
export function Customers() {
  const {user} = useAuth(); 

  const [customers, setCustomers] = useState({ clientes: [] });
  const [filteredCustomers, setFilteredCustomers] = useState({ clientes: [] });
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');



  async function refreshCustomer(){
    const data = await loadCustomer(); 
      if (data) {
        setCustomers(data);
        setFilteredCustomers(data); 
      }
  }
  useEffect(() => {
    refreshCustomer();
  }, []);


  function handleSearch(value) {
    if (value === '') {
      setFilteredCustomers(customers);
    } else {
      const filtered = customers.clientes.filter(cliente => 
        cliente.nome.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCustomers({ clientes: filtered });    
    }
  }

  function sucessRequisition(message){
    refreshCustomer();
    setErrorVisible(false);
    setSucessVisible(true);
    setSucessMessage(message);
  }

  function errorRequisition(message){
    refreshCustomer();
    setErrorVisible(true);
    setSucessVisible(false);
    setErrorMessage(message);
  }

  return (
    <Layout>
      <Header onSearchChange={handleSearch}/>
      {user ? (
      <Main>
        <section className="space-y-4">
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-primary">Clientes</h1>
          </div>
          {errorVisible && <ErrorMessage message={errorMessage}/>}
          {sucessVisible && <SucessMessage message={sucessMessage}/>}
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {filteredCustomers.clientes ? filteredCustomers.clientes.map((cliente) => (
              <CustomerCard
              key={cliente.cpf} 
              nome={cliente.nome}
              email={cliente.email}
              cpf={cliente.cpf}
              telefone={cliente.telefone}
              endereco={cliente.endereco}
              sucessRequisition={sucessRequisition}
              errorRequisition={errorRequisition}
              onChangeCustomer={refreshCustomer}
              />
            
          )) : <p>Nenhum cliente encontrado.</p>}
          </div>

        </section>
      </Main>
      ) : (
        <Main className="flex justify-center items-center sm:items-start sm:pt-24">
          <div className="bg-red-200 text-red-700 p-4 rounded">
            <h2 className="text-2xl font-semibold">Acesso Restrito</h2>
          </div>
        </Main>
      )}
      <Footer />
    </Layout>
  );
}
