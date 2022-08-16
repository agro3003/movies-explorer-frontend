import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import navClose from '../../images/close-button.svg';
import icon from '../../images/nav-button.svg'

export default function Navigation() {
  const [menuState, setMenuState] = React.useState(false);

  const changeNemuState = () => menuState ? setMenuState(false) : setMenuState(true);

  return (
    <section className='navigation'>
      <div className='navigation__width-block'>
        <div className='navigation__films-links'>
          <Link className='navigation__link' to='/movies'>Фильмы</Link>
          <Link className='navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <Link className='navigation__link-account' to='/profile'>Аккаунт</Link>
      </div>
      <img className='navigation__icon' src={icon} alt='иконка' onClick={changeNemuState} />
      <div className={`navigation__popup ${!menuState && 'navigation__popup_hidden'}`}>
        <div className='navigation__content'>
          <img className='navigation__close' src={navClose} alt='закрыть' onClick={changeNemuState} />
          <div className='navigation__films-links-popup'>
            <NavLink activeClassName='navigation__link-popup_border' className='navigation__link-popup' exact to='/' onClick={changeNemuState}>Главная</NavLink>
            <NavLink activeClassName='navigation__link-popup_border' className='navigation__link-popup' to='/movies' onClick={changeNemuState}>Фильмы</NavLink>
            <NavLink activeClassName='navigation__link-popup_border' className='navigation__link-popup' to='/saved-movies' onClick={changeNemuState}>Сохраненные фильмы</NavLink>
          </div>
          <NavLink activeClassName='navigation__link_border' className='navigation__link-account-popup' to='/profile' onClick={changeNemuState}>Аккаунт</NavLink>
        </div>
      </div>
    </section>
  )
}