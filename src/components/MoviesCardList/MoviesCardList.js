import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Link, Route, Switch } from 'react-router-dom';
import { cards, savedCard } from '../../images/cards';

export default function MoviesCardList() {
  return (
    <Switch>
      <Route path='/movies'>
      <div className='movies-card-list'>
        {cards.map((item) => <MoviesCard image={item.image} name={item.nameRU} duration={item.duration} />)}
      </div>
    </Route>
    <Route path='/saved-movies'>
      <div className='movies-card-list'>
        {savedCard.map((item) => <MoviesCard image={item.image} name={item.nameRU} duration={item.duration} />)}
      </div>
    </Route>
    </Switch >
  )
}