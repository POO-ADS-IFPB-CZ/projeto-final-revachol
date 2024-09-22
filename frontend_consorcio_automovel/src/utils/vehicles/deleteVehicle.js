export async function deleteVehicles(chassi) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/automovel/deletar/${chassi}`, {
        method: 'DELETE',
        credentials: 'include', 
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Veículo deletado', data);
        return data;
      } else {
        console.error('Falha ao deletar o Veículo. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar deletar o Veículo', error.message);
      return null;
    }
  }