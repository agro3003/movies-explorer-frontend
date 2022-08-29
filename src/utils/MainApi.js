export const baseUrl = 'https://api.romanmovies.nomoredomains.xyz';

const responseCheck = (res) => (res.ok ? res.json() : Promise.reject(res));

export const register = (name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(responseCheck)
  };


export const authorize = ( email, password ) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(responseCheck)
};

export const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(responseCheck)
};

export const updateUserInfo = ( name, email, token ) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, email })
  })
    .then(responseCheck)
};

export const getMovies = ( token ) => {
  return fetch(`${baseUrl}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(responseCheck)
};

export const saveMovies = ( movie, token ) => {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
       country: movie.country,
       director: movie.director,
       duration: movie.duration,
       year: movie.year,
       description: movie.description,
       image: `https://api.nomoreparties.co/${movie.image.url}`,
       trailerLink: movie.trailerLink,
       nameRU: movie.nameRU,
       nameEN: movie.nameEN,
       thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
       movieId: movie.id,
      })
  })
    .then(responseCheck)
};

export const removeMovie = ( token, id ) => {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(responseCheck)
};