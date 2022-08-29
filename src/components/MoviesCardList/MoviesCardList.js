import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ viewMovies, handleCardDelete, savedMovies, handleSaveMovies, setIsSavedViewMovies }) {
  return (
    <section className='movies-card-list'>
      {viewMovies.map((item) =>
        <MoviesCard
          key={item.id ?? item._id}
          handleCardDelete={handleCardDelete}
          savedMovies={savedMovies}
          handleSaveMovies={handleSaveMovies}
          movie={item}
          setIsSavedViewMovies={setIsSavedViewMovies}
        />)}
    </section>
  )
}