import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies() {
  return (
    <section className='movies'>
      <div className='movies__search-form'>
        <SearchForm />
      </div>
      <div className='movies__movies-card-list'>
        <MoviesCardList />
      </div>
      <button className='movies__button-more'>Ещё</button>
    </section>
  )
}