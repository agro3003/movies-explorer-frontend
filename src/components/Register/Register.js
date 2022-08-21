import { Link } from 'react-router-dom';
import './Register.css';
import MainLink from '../MainLink/MainLink';

export default function Register() {
  return (
    <section className='register'>
      <MainLink />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <span className='register__input-label'>Имя</span>
        <input name="name"  type="text"  className='register__input' minLength="2" maxLength="32" required />
        <span className='register__input-error'></span>
        <span className='register__input-label'>E-mail</span>
        <input name="email"  type="email"  className='register__input' required />
        <span className='register__input-error'></span>
        <span className='register__input-label'>Пароль</span>
        <input name="password"  type="password"  className='register__input register__input_error' minLength="4" maxLength="32" required />
        <span className='register__input-error'>Что-то пошло не так...</span>
        <button type="submit" className='register__button'>Зарегистрироваться</button>
      </form>
      <div className='register__sign-up-link'>
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in">&nbsp;Войти</Link>
      </div>
    </section>
  );
}