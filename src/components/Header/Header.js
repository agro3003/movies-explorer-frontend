import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import MainLink from '../MainLink/MainLink';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <Switch>
      <Route exact path='/'>
        <header className='header'>
          <MainLink />
          <div className='header__main'>
            <div className='header__sign-links'>
              <Link className='header__sign-up' to='/sign-up'>Регистрация</Link>
              <Link className='header__sign-in' to='/sign-in'>Войти</Link>
            </div>
          </div>
        </header>
      </Route>
      <Route path={['/movies', '/profile', '/saved-movies']}>
        <header className='header'>
          <MainLink />
          <div className='header__navigation'>
            <Navigation />
          </div>
        </header>
      </Route>
    </Switch>
  );
}