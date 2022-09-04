export const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

const responseCheck = (res) => (res.ok ? res.json() : Promise.reject(res.status));

export const getMovies = () => {
    return fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(responseCheck)
  };