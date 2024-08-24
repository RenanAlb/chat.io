export const cadastroServer = async (nome, email, senha) => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/users/cadastro', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar o usuário');
    }

    const responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.error(error);
  }
};

export const loginServer = async (email, senha) => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/users/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, senha }),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.error(error);
  }
};

export const pesquisarServer = async (e) => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/pesquisa/' + e);

    if (!response.ok) {
      throw new Error('Erro ao pesquisar');
    }

    const responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export const getUserServer = async () => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/users/perfil', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar informações do perfil');
    }

    const responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.error(error);
    return null;
  }
};

export const buscarMensagensServer = async (de, para) => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/mensagens-antigas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ de, para })
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar as mensagens');
    }

    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch(error) {
    console.error(error);
    return [];
  }
};

export const changeImagePerfilServer = async (imageSrc, id) => {
  try {
    const formData = new FormData();
    formData.append('data', imageSrc);
    formData.append('id', id);

    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/image', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar a imagem');
    }

    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch(error) {
    console.error(error);
    return null;
  }
};

export const getUsersTalkServer = async (data) => {
  try {
    const response = await fetch('https://chat-io-backend-cb8v.onrender.com/users-talk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os usuários');
    }

    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch(error) {
    console.error(error);
    return [];
  }
};