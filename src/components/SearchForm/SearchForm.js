import './SearchForm.css';
import searchImg from '../../images/search-img.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../utils/useFormWithValidation';
import React from 'react';

export default function SearchForm({ addShowCards, valueSerchMovies, setCheckboxStatus, checkboxStatus, setValueSearchMovies }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = values.search;

    setValueSearchMovies(data);

    addShowCards(data);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className='search-form' noValidate>
      <div className='search-form__input-block'>
        <img src={searchImg} className='search-form__image' alt='icon' />
        <div className='search-form__input-block-whitherror'>
          <input name='search' defaultValue={valueSerchMovies} onChange={handleChange} className='search-form__input' placeholder="Фильм" type='text' required />
          <span className='login__input-error'>{errors.search}</span>
        </div>
        <button className={`search-form__button ${!isValid && 'search-form__button_disabled'}`} disabled={!isValid} type='submit'></button>
      </div>
      <div className='search-form__filter-checkbox'>
        <FilterCheckbox
          setCheckboxStatus={setCheckboxStatus}
          checkboxStatus={checkboxStatus}
        />
      </div>
    </form>
  )
}