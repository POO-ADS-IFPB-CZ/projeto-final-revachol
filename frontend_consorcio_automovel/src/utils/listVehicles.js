import axios from 'axios';

export async function loadVehicles() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/automovel/listar');
      console.log(response.data.automoveis);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar veículos:', error);
      return null;
    }
    
};
