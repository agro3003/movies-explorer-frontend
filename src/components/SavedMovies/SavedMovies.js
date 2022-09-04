import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

export default function SavedMovies({ setCheckboxStatus, setIsSavedViewMovies, addShowCards, checkboxStatus, viewMovies, handleCardDelete, isLoading, isNotFind, savedMovies, loggedIn }) {
  const [valueSerchMovies, setValueSearchMovies] = React.useState('');

  React.useEffect(() => {
    setCheckboxStatus(false);
    setIsSavedViewMovies(savedMovies);
    setValueSearchMovies('');
    // eslint-disable-next-line
  }, []);

  return (
    <section className='saved-movies'>
      <div className='saved-movies__search-form'>
        <SearchForm
          valueSerchMovies={valueSerchMovies}
          addShowCards={addShowCards}
          checkboxStatus={checkboxStatus}
          setCheckboxStatus={setCheckboxStatus}
          setValueSearchMovies={setValueSearchMovies}
        />
      </div>
      {isLoading ? <Preloader /> : <>
        <div className='saved-movies__movies-card-list'>
          <MoviesCardList
            viewMovies={viewMovies}
            handleCardDelete={handleCardDelete}
            setIsSavedViewMovies={setIsSavedViewMovies}
          />
        </div>
        <p className={`saved-movies__not-find ${isNotFind && 'saved-movies__not-find_active'}`}>По вашему запросу ничего не найдено</p>
      </>
      }
    </section>
  )
}