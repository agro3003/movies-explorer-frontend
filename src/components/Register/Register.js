import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import MainLink from '../MainLink/MainLink';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function Register({ onSingUp }) {
  const { values, errors, isValid, handleChange, resetForm } =
  useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onSingUp(values);
    resetForm();
  }

  return (
    <section className='register'>
      <MainLink />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form onSubmit={handleSubmit} className='register__form' noValidate>
        <span className='register__input-label'>Имя</span>
        <input name="name" value={values.name || ''}  type="text" onChange={handleChange}  className='register__input' pattern="[A-Za-zА-Яа-яЁё -]{2,30}" required />
        <span className='register__input-error'>{errors.name}</span>
        <span className='register__input-label'>E-mail</span>
        <input name="email" value={values.email || ''}  type="email" onChange={handleChange}  className='register__input' required pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})" />
        <span className='register__input-error'>{errors.email}</span>
        <span className='register__input-label'>Пароль</span>
        <input name="password" value={values.password || ''}  type="password" onChange={handleChange}  className='register__input register__input_error' minLength="4" maxLength="32" required />
        <span className='register__input-error'>{errors.password}</span>
        <button type="submit" className={`register__button ${!isValid && 'register__button_disabled'}`} disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <div className='register__sign-up-link'>
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in">&nbsp;Войти</Link>
      </div>
    </section>
  );
}