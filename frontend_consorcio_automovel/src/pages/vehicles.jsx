import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import VehicleCard from "../components/vehicle-card";
import { SucessMessage } from "../components/sucessMessage";
import { ErrorMessage } from "../components/errorMessage";
import { useEffect, useState } from "react";
import { loadVehicles } from "../utils/vehicles/listVehicles";
import { addVehicle } from "../utils/vehicles/addVehicle";
import { useAuth } from "../contexts/authContext";

export function Vehicles() {
  const { user } = useAuth();
  const [chassi, setChassi] = useState("");
  const [nomeCarro, setNomeCarro] = useState("");
  const [corCarro, setCor] = useState("");
  const [precoCarro, setPreco] = useState(0);
  const [modeloCarro, setModelo] = useState("");
  const [imagem, setImagem] = useState();

  const [vehicles, setVehicles] = useState({ automoveis: [] });
  const [filteredVehicles, setFilteredVehicles] = useState({ automoveis: [] });
  const [errorVisible, setErrorVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');

  function cleanInputs() {
    setChassi("");
    setNomeCarro("");
    setCor("");
    setPreco("");
    setModelo("");
    setImagem(null);
  }

  async function refreshVehicles() {
    const data = await loadVehicles(); 
    if (data) {
      setVehicles(data); 
      setFilteredVehicles(data);
    }
  }

  useEffect(() => {
    refreshVehicles();
  }, []);

  async function handleSaveVehicle() {
    console.log(imagem);
    if(chassi && modeloCarro && nomeCarro && precoCarro && corCarro && imagem){
      let result = await addVehicle(chassi, modeloCarro, nomeCarro, precoCarro, corCarro, imagem);
      if (result) {
        sucessRequisition("Cadastro bem sucedido");
      } else {
        errorRequisition("Falha no cadastro de veículo");
      }
      refreshVehicles();
      cleanInputs();
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

  function handleChange(event) {
    setImagem(event.target.files[0])
  }

  function handleSearch(value) {
    if (value === '') {
      setFilteredVehicles(vehicles);
    } else {
      const filtered = vehicles.automoveis.filter(vehicle => 
        vehicle.nome.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredVehicles({ automoveis: filtered });    
    }
  }

  return (
    <Layout>
      <Header onSearchChange={handleSearch}/>
      <Main>
        <section className="space-y-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-semibold text-primary">Veiculos</h1>
            {user &&
              <Modal title="Adicionar veículo" saveOnClick={handleSaveVehicle}>
                <Input type="text" placeholder="Chassi"
                  value={chassi}
                  onChange={e => setChassi(e.target.value)}
                />
                <Input type="text" placeholder="Modelo"
                  value={modeloCarro}
                  onChange={e => setModelo(e.target.value)}
                />
                <Input type="text" placeholder="Nome"
                  value={nomeCarro}
                  onChange={e => setNomeCarro(e.target.value)}
                />
                <Input type="number" placeholder="Preço"
                  value={precoCarro}
                  onChange={e => setPreco(e.target.value)}
                />
                <Input type="text" placeholder="Cor"
                  value={corCarro}
                  onChange={e => setCor(e.target.value)}
                />
                <div className="relative max-w-36 py-1">

                  <div >
                    <Input type="file"
                      onChange={handleChange} />
                  </div>
                </div>
              </Modal>
            }

          </div>
          {errorVisible && <ErrorMessage message={errorMessage}/>}
          {sucessVisible && <SucessMessage message={sucessMessage}/>}
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto">
            {filteredVehicles.automoveis ? filteredVehicles.automoveis.map((index) => (
              <VehicleCard
                nome={index.nome}
                chassi={index.chassi}
                modelo={index.modelo}
                preco={index.preco}
                cor={index.cor}
                imagem={index.imagem}
                key={index.chassi}
                sucessRequisition={sucessRequisition}
                errorRequisition={errorRequisition}
                onChangeVehicle={refreshVehicles}
              />

            )) : <p>Nenhum veículo encontrado.</p>}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
