export async function addSale(cpf, chassi) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/venda/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({
          cpf_cliente:cpf,
          chassi_automovel:chassi
        })
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Cadastro Bem sucedido', data);
        return data;
      } else {
        console.error('Falha no cadastro. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar adicionar venda', error.message);
      return null;
    }
  }