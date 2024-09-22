export async function loadVehicles() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/automovel/listar', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include' 
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Erro ao buscar veículos. Status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar veículos:', error);
    return null;
  }
}