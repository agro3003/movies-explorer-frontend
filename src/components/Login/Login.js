import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import MainLink from '../MainLink/MainLink';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function Login({ onSignIn }) {
  const { values, errors, isValid, handleChange, resetForm } =
  useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      return;
    }
    resetForm();
    return onSignIn(email, password)
  };

  return (
    <section className='login'>
      <MainLink />
      <h2 className='login__title'>Рады видеть!</h2>
      <form onSubmit={handleSubmit} className='login__form' noValidate>
        <span className='login__input-label'>E-mail</span>
        <input name="email" value={values.email || ''}  type="email" onChange={handleChange} className='login__input' required pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})" />
        <span className='login__input-error'>{errors.email}</span>
        <span className='login__input-label'>Пароль</span>
        <input name="password" value={values.password || ''} type="password" onChange={handleChange} className='login__input' minLength="4" maxLength="32" required />
        <span className='login__input-error'>{errors.password}</span>
        <button type="submit" disabled={!isValid} className={`login__button ${!isValid && 'login__button_disabled'}`}>Войти</button>
      </form>
      <div className='login__sign-up-link'>
        <p>Ещё не зарегистрированы?</p>
        <Link to="/sign-up">&nbsp;Регистрация</Link>
      </div>
    </section>
  );
}