export async function deleteCustomer(codigo) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cliente/deletar/${codigo}`, {
        method: 'DELETE',
        credentials: 'include', 
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log('Cliente deletado', data);
        return data;
      } else {
        console.error('Falha ao deletar o cliente. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar deletar o cliente', error.message);
      return null;
    }
  }