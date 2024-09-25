export async function loadCustomer() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cliente/listar', {
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
        console.error('Erro ao litar os clientes. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar os clientes:', error);
      return null;
    }
  }