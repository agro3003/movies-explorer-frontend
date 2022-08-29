import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function Profile({ updateUserInfo, loggedOut }) {
  const user = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});
  function handleSubmit(evt) {
    evt.preventDefault();
    updateUserInfo({
      name: values.name || user.name,
      email: values.email || user.email
    });
    resetForm();
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет,&nbsp;{user.name}!</h2>
      <form onSubmit={handleSubmit} className='profile__form' noValidate>
        <div className='profile__input-blocks'>
          <div className='profile__input-block'>
            <p className='profile__input-text'>Имя</p>
            <input name='name' defaultValue={user.name} onChange={handleChange} className='profile__input' type='text' required pattern="[A-Za-zА-Яа-яЁё -]{2,30}" />
          </div>
          <span className='profile__input-error'>{errors.name}</span>
          <span className='profile__input-error'></span>
          <div className='profile__input-block'>
            <p className='profile__input-text'>E-mail</p>
            <input name='email' defaultValue={user.email} onChange={handleChange} className='profile__input' type='email' required />
          </div>
          <span className='profile__input-error'>{errors.email}</span>
        </div>
        <button type='submit' className={`profile__edit ${isValid && 'profile__edit_active'}`} disabled={!isValid}>{isValid ? 'Сохранить' : 'Редактировать'}</button>
      </form>
      <button className='profile__exit' onClick={loggedOut}>Выйти из аккауннта</button>
    </section>
  )
}