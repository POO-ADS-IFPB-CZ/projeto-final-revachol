export async function deleteSale(codigo) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/venda/deletar/${codigo}`, {
        method: 'DELETE',
        credentials: 'include', 
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Item deletado', data);
        return data;
      } else {
        console.error('Falha ao deletar o item. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar deletar o item', error.message);
      return null;
    }
  }