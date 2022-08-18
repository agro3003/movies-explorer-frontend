import React from 'react'
import { Route, Switch } from 'react-router-dom';
import card1 from '../../images/card1.png';
import './MoviesCard.css';
import disabledSaved from '../../images/disabled-saved.svg';
import activeSaved from '../../images/active-saved.svg';
import deleteImg from '../../images/delete-card.svg';

export default function MoviesCard(props) {
  const [saved, setSaved] = React.useState(disabledSaved);
  const changeSaveIcon = () => {
    saved === disabledSaved ? setSaved(activeSaved) : setSaved(disabledSaved)
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
            <img src={saved} className='movies-card__button' alt='сохранить' onClick={changeSaveIcon} />
          </Route>
          <Route path='/saved-movies'>
            <img src={deleteImg} className='movies-card__button' alt='удалить' onClick={changeSaveIcon} />
          </Route>
        </Switch>
      </div>
      <img src={card1} className='movies-card__image' alt='постер' />
    </div>
  )
}