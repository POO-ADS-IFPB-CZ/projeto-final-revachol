import axios from 'axios';

export async function authentication(username, password) {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/vendedor/login',
      {
        username: username,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json', 
        },
       
        withCredentials: true, 
      }
    );

    if (response.status === 200) {
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
