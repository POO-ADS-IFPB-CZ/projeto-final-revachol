import axios from 'axios';

export async function sellerRegister(username, password, email, first_name, last_name) {
  try {
    console.log("tentando", username, email, password, first_name, last_name);

    const response = await axios.post(
      'http://127.0.0.1:8000/api/vendedor/cadastrar',
      {
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name
      },
      {
        headers: {
          'Content-Type': 'application/json', 
        },
       
        withCredentials: true, 
      }
    );
    
    if (response.status === 201) {
      console.log('Cadastro Bem sucedido', response.data);
      return response.data;
    } else {
      console.error('Falha no cadastro. Status:', response.status);
      return null;
    }
  } catch (error) {
    
    console.error('Erro ao tentar fazer o cadastro de funcionario:', error.message);
    return null;
  }
}
