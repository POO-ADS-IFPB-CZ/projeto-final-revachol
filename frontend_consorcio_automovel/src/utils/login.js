import axios from 'axios';

export async function login(username, password) {
  try {
    console.log(username, password);
    const response = await axios.post(
      'http://127.0.0.1:8000/api/vendedor/login',
      {
        username: username,
        password: password
      },
      {
        headers: {
          'accept': '*/*', 
          'Content-Type': 'application/json', 
        },
       
        withCredentials: false, 
      }
    );

    if (response.status === 200) {
      console.log('Login bem-sucedido:', response.data);
      return response.data;
    } else {
      console.error('Falha no login. Status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    return null;
  }
}
