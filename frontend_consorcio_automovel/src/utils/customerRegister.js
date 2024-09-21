export async function customerRegister(nome, cpf, telefone, email, endereco) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cliente/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include', 
        body: JSON.stringify({
          nome: nome,
          cpf: cpf,
          email: email,
          telefone:telefone,
          endereco
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
      console.error('Erro ao tentar fazer o cadastro de cliente:', error.message);
      return null;
    }
  }