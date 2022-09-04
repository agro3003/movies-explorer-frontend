import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

export default function Movies({ setViewMovies, addShowCards, setCheckboxStatus, checkboxStatus, viewMovies, handleSaveMovies, savedMovies, handleCardDelete, setIsSavedViewMovies, isLoading, isNotFind, loadMoreStatus, handleLoadMore }) {
  const [valueSerchMovies, setValueSearchMovies] = React.useState('');

  React.useEffect(() => {
    const localSearch = localStorage.getItem('moviessearch');
    if (localSearch) {
      const state = JSON.parse(localSearch);
      setCheckboxStatus(state.checkboxStatus);
      setViewMovies(state.search);
      setValueSearchMovies(state.data);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='movies'>
      <div className='movies__search-form'>
        <SearchForm
          valueSerchMovies={valueSerchMovies}
          addShowCards={addShowCards}
          setCheckboxStatus={setCheckboxStatus}
          checkboxStatus={checkboxStatus}
          setValueSearchMovies={setValueSearchMovies}
        />
      </div>
      {isLoading ? <Preloader /> : <>
        <div className='movies__movies-card-list'>
          <MoviesCardList
            viewMovies={viewMovies}
            handleSaveMovies={handleSaveMovies}
            savedMovies={savedMovies}
            handleCardDelete={handleCardDelete}
            setIsSavedViewMovies={setIsSavedViewMovies}
          />
        </div>
        <p className={`movies__not-find ${isNotFind && 'movies__not-find_active'}`}>По вашему запросу ничего не найдено</p>
        <button className={`movies__button-more ${loadMoreStatus && 'movies__button-more_active'}`} onClick={handleLoadMore}>Ещё</button>
      </>
      }
    </section>
  )
}