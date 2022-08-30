import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({ movie, savedMovies, handleSaveMovies, handleCardDelete, setIsSavedViewMovies }) {
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname !== '/movies') return;
    setIsSaved(moviesIsSaved(movie.id, savedMovies));
  }, []);


  const moviesIsSaved = (id, arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].movieId === id) {
        return true;
      }
    }
    return false;
  }

  const changeSaveMovies = () => {
    if (!isSaved) {
      handleSaveMovies(movie);
    } else {
      const itemId = (savedMovies.find(item => item.movieId === movie.id))._id;
      handleCardDelete(itemId);
      setIsSavedViewMovies((state) => state.filter((c) => c._id !== itemId))
    }
    setIsSaved(!isSaved);
  }

  const deleteMovies = () => {
    handleCardDelete(movie._id)
    setIsSavedViewMovies((state) => state.filter((c) => c._id !== movie._id))
  }

  return (

    <div className='movies-card'>
      <div className='movies-card__top-block'>
        <div>
          <h2 className='movies-card__name'>{movie.nameRU}</h2>
          <p className='movies-card__duration'>{movie.duration}</p>
        </div>
        <Switch>
          <Route exact path='/movies'>
            <button className={`movies-card__button ${isSaved && 'movies-card__button_active'}`} type='button' onClick={changeSaveMovies} />
          </Route >
          <Route exact path='/saved-movies'>
            <button className='movies-card__button movies-card__button_delete' type='button' onClick={deleteMovies} />
          </Route>
        </Switch >
      </div>
      <a className='movies-card__image-link' href={movie.trailerLink} alt='ссылка на треилер' target='_blank' rel='noreferrer'>
        <Switch>
          <Route exact path='/movies'>
            <img src={`https://api.nomoreparties.co/${movie.image.url}`} className='movies-card__image' alt='постер' />
          </Route >
          <Route exact path='/saved-movies'>
            <img src={movie.image} className='movies-card__image' alt='постер' />
          </Route >
        </Switch >
      </a>
    </div >

  )
}