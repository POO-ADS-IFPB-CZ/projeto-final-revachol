export async function loadSales() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/venda/listar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' 
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Erro ao buscar as vendas. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar vendas:', error);
      return null;
    }
  }