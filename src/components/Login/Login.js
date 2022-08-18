import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import MainLink from '../MainLink/MainLink';

export default function Login() {
  return (
    <section className='login'>
      <MainLink />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <span className='login__input-label'>E-mail</span>
        <input name="email"  type="email"  className='login__input' required />
        <span className='login__input-error'></span>
        <span className='login__input-label'>Пароль</span>
        <input name="password"  type="password"  className='login__input' minLength="4" maxLength="32" required />
        <span className='login__input-error'></span>
        <button type="submit" className='login__button'>Войти</button>
      </form>
      <div className='login__sign-up-link'>
        <p>Ещё не зарегистрированы?</p>
        <Link to="/sign-up">&nbsp;Регистрация</Link>
      </div>
    </section>
  );
}