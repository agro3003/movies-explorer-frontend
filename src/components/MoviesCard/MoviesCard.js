import React from 'react'
import { Route, Switch } from 'react-router-dom';
import card1 from '../../images/card1.png';
import './MoviesCard.css';

export default function MoviesCard(props) {
  const [saved, setSaved] = React.useState(false);
  const changeSaveIcon = () => {
    saved === false ? setSaved(true) : setSaved(false)
  };
  return (
    <div className='movies-card'>
      <div className='movies-card__top-block'>
        <div>
          <h2 className='movies-card__name'>{props.name}</h2>
          <p className='movies-card__duration'>{props.duration}</p>
        </div>
        <Switch>
          <Route path='/movies'>
            <button className={`movies-card__button ${saved && 'movies-card__button_active'}`} type='button' onClick={changeSaveIcon} />
          </Route>
          <Route path='/saved-movies'>
            <button className='movies-card__button movies-card__button_delete' type='button' />
          </Route>
        </Switch>
      </div>
      <img src={card1} className='movies-card__image' alt='постер' />
    </div>
  )
}