import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import VehicleCard from "../components/vehicle-card";
import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { loadVehicles } from "../utils/listVehicles";
//import axios from "axios";

export function Vehicles() {

  const [vehicles, setVehicles] = useState({ automoveis: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadVehicles(); // Chama a função que busca os veículos
      if (data) {
        setVehicles(data); // Atualiza o estado com os dados retornados
      }
    };

    fetchData();

    
  }, []);


  async function handleSaveVehicle() {   
    console.log(vehicles.automoveis);
  }
  return (
    <Layout>
      <Header />
      <Main>
        <section className="space-y-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-semibold text-primary">Veiculos</h1>
            <Modal title="Adicionar veículo" saveOnClick={handleSaveVehicle}>
              <Input type="text" placeholder="Chassi" />
              <Input type="text" placeholder="Modelo" />
              <Input type="text" placeholder="Nome" />
              <Input type="number" placeholder="Preço" />
              <Input type="text" placeholder="Cor" />
              <div className="relative max-w-36 py-1">
                <input type="file" className="absolute  opacity-0  inset-0 peer" />
                <div className="flex justify-center items-center gap-1 py-1 rounded text-primary bg-slate-200 peer-hover:bg-slate-300">
                  <Upload size={16}/>
                  Upload
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
            key={index} />
            
          )) : <p>Nenhum veículo encontrado.</p>}
          </div>

        </section>
      </Main>
      <Footer />
    </Layout>
  );
}
