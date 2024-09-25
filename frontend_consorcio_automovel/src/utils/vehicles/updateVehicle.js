export async function updateVehicles(chassi, modelo, nome, preco, cor) {
    console.log(chassi, modelo, nome, preco, cor);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/automovel/atualizar/${chassi}`, {
        method: 'PUT',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json', // Adiciona o cabeçalho indicando que o conteúdo é JSON
        },
        body: JSON.stringify({
            modelo: modelo,
            nome: nome, 
            preco: Number(preco), 
            cor: cor
        }),
       
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Veículo atualizado', data);
        return data;
      } else {
        console.error('Falha ao atualizar o Veículo. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar atualizar o Veículo', error.message);
      return null;
    }
  }