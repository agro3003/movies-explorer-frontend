import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const name = 'Роман';
  const email = 'doubleempty@yandex.ru'

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет,&nbsp;{name}!</h2>
      <form className='profile__form'>
        <div className='profile__input-blocks'>
          <div className='profile__input-block'>
            <p className='profile__input-text'>Имя</p>
            <input className='profile__input' placeholder={name} type='text' minLength='2' maxLength='30' required />
          </div>
          <span className='profile__input-error'></span>
          <div className='profile__input-block'>
            <p className='profile__input-text'>E-mail</p>
            <input className='profile__input' placeholder={email} type='email' required />
            <span className='profile__input-error'></span>
          </div>
        </div>
        <button type='submit' className='profile__edit'>Редактировать</button>
      </form>
      <Link className='profile__exit' exact to='/'>Выйти из аккауннта</Link>
    </section>
  )
}