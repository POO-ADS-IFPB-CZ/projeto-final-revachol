export async function sellerRegister(username, password, email, first_name, last_name) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/vendedor/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      credentials: 'include', 
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name
      })
    });

    if (response.status === 201) {
      const data = await response.json();
      console.log('Cadastro Bem sucedido', data);
      return data;
    } else {
      console.error('Falha no cadastro. Status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erro ao tentar fazer o cadastro de funcionário:', error.message);
    return null;
  }
}