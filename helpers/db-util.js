export async function load() {
  try {
    const data = {
      username: 'guess',
      password: 'guess',
    }
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
  }
}