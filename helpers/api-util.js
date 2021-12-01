export async function loadAllItems(token) {
  try {
    const response = await fetch('http://localhost:3000/movies/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
      mode: 'no-cors',
    });
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      alert('You are not admin');
    }
    console.log('Успех:');
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
