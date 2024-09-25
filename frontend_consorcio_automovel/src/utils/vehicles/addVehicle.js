export async function addVehicle(chassi, modelo, nome, preco, cor, imagem) {
    const formData = new FormData();
    formData.append('image', imagem); // 'image' será o campo esperado pela API
  
    // Adiciona o JSON como uma string
    const data = {
      chassi: chassi,
      modelo: modelo,
      nome: nome,
      preco: Number(preco),
      cor: cor
    };
    console.log(data);
    formData.append('data', JSON.stringify(data)); 
    try {
        const response = await fetch('http://127.0.0.1:8000/api/automovel/cadastrar', {
            method: 'POST',
            credentials: 'include',
            body: formData,
           
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log('Cadastro de veículo bem sucedido', data);
            return data;
        } else {
            console.error('Falha no cadastro de veículo. Status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Erro ao tentar adicionar veículo', error.message);
        return null;
    }
}