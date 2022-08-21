import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies() {
  return (
    <section className='saved-movies'>
      <div className='saved-movies__search-form'>
        <SearchForm />
      </div>
      <div className='saved-movies__movies-card-list'>
        <MoviesCardList />
      </div>
    </section>
  )
}