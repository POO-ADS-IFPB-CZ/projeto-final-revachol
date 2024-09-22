export async function logout() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/vendedor/logout", {
        method: 'POST',
        credentials: 'include' 
      });
      
      if (response.ok) {
        return true;
      } else {
        console.error('Erro ao fazer logout');
        return null;
      }
    } catch (error) {
      console.error('Erro durante o logout', error);
      return null;
    }
  }