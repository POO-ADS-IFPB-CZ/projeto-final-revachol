import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import VehicleCard from "../components/vehicle-card";
//import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { loadVehicles } from "../utils/listVehicles";
import { addVehicle } from "../utils/addVehicle";
//import { useAuth } from "../contexts/authContext";

export function Vehicles() {
  // const {user} = useAuth(); 
  const [chassi, setChassi] = useState("");
  const [nomeCarro, setNomeCarro] = useState("");
  const [corCarro, setCor] = useState("");
  const [precoCarro, setPreco] = useState(0);
  const [modeloCarro, setModelo] = useState("");
  const [imagem, setImagem] = useState();

  const [vehicles, setVehicles] = useState({ automoveis: [] });

  function cleanInputs(){
    setChassi("");
    setNomeCarro("");
    setCor("");
    setPreco("");
    setModelo("");
    setImagem(null);
  }

  async function refreshVehicles(){
    const data = await loadVehicles(); // Chama a função que busca os veículos
      if (data) {
        setVehicles(data); // Atualiza o estado com os dados retornados
      }
  }

  useEffect(() => {
    refreshVehicles();
  }, []);

  async function handleSaveVehicle() {
    console.log(imagem);
    let result = await addVehicle(chassi, modeloCarro, nomeCarro, precoCarro, corCarro, imagem);
    if(result){
      console.log("Cadastro bem sucedido");
    } else {
      console.log("erro");
    }
    refreshVehicles();
    cleanInputs();
  }

  function handleChange(event) {
    setImagem(event.target.files[0])
  }

  return (
    <Layout>
      <Header />
      <Main>
        <section className="space-y-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-semibold text-primary">Veiculos</h1>
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
                  onChange={handleChange}/>
                </div>
              </div>
            </Modal>
          </div>

          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto">
            {vehicles.automoveis ? vehicles.automoveis.map((index) => (
              <VehicleCard
                nome={index.nome}
                chassi={index.chassi}
                modelo={index.modelo}
                preco={index.preco}
                cor={index.cor}
                imagem={index.imagem}
                key={index.chassi} 
                onDeleteVehicle={refreshVehicles}
                />
                
            )) : <p>Nenhum veículo encontrado.</p>}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
