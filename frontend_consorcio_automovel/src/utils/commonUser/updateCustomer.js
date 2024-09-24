export async function updateCustomer(cpf, nome, email, endereco, telefone) {
    console.log(cpf, nome, email, endereco, telefone);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cliente/atualizar/${cpf}`, {
        method: 'PUT',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json', // Adiciona o cabeçalho indicando que o conteúdo é JSON
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            endereco: endereco,
            telefone: telefone
        }),
       
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Cliente atualizado', data);
        return data;
      } else {
        console.error('Falha ao atualizar o cliente. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao tentar atualizar o atualizar', error.message);
      return null;
    }
  }