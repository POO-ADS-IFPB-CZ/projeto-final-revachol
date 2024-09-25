export async function authentication(username, password) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/vendedor/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.error('Falha no login. Status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    return false;
  }
}
