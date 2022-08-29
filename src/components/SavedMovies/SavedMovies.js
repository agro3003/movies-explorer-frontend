import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

export default function SavedMovies({ setCheckboxStatus, setIsSavedViewMovies, addShowCards, checkboxStatus, viewMovies, handleCardDelete, isLoading, isNotFind }) {
  const [valueSerchMovies, setValueSearchMovies] = React.useState('Фильм');

  React.useEffect(() => {
    const localSearch = localStorage.getItem('savedmoviessearch');
    if (localSearch) {
      const state = JSON.parse(localSearch);
      setCheckboxStatus(state.checkboxStatus);
      setIsSavedViewMovies(state.searchSaved);
      setValueSearchMovies(state.data);
    } else {
      return;
    }
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
      <div className='saved-movies__movies-card-list'>
        <MoviesCardList
          viewMovies={viewMovies}
          handleCardDelete={handleCardDelete}
          setIsSavedViewMovies={setIsSavedViewMovies}
        />
      </div>
      <div className={`saved-movies__preloader ${isLoading && 'saved-movies__preloader_active'}`}>
        <Preloader />
      </div>
      <p className={`saved-movies__not-find ${isNotFind && 'saved-movies__not-find_active'}`}>По вашему запросу ничего не найдено</p>
    </section>
  )
}