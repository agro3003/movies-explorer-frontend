import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function Profile({ updateUserInfo, loggedOut }) {
  const user = React.useContext(CurrentUserContext);
  const [isChangeInput, setIsChangeInput] = React.useState(false);

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  React.useEffect(() => {
    if (((values.name === user.name) && (values.email === user.email)) || ((values.name === user.name) && (!values.email)) || ((!values.name) && (values.email === user.email)) || (!values.name && !values.email)) {
      setIsChangeInput(false)
    }
    else {
      setIsChangeInput(true)
    }
    // eslint-disable-next-line
  }, [, values]);

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
          <div className='profile__input-block'>
            <p className='profile__input-text'>E-mail</p>
            <input name='email' defaultValue={user.email} onChange={handleChange} className='profile__input' type='email' required pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})" />
          </div>
          <span className='profile__input-error'>{errors.email}</span>
        </div>
        <div className="profile__edit-button">
          <span className='profile__input-error'>{!isChangeInput && 'что бы редактирвать, необходимо изменить имя или email'}</span>
          <button type='submit' className={`profile__edit ${(isValid && isChangeInput) && 'profile__edit_active'}`} disabled={!isValid || !isChangeInput}>{(isValid && isChangeInput) ? 'Сохранить' : 'Редактировать'}</button>
        </div>
      </form>
      <button className='profile__exit' onClick={loggedOut}>Выйти из аккауннта</button>
    </section >
  )
}