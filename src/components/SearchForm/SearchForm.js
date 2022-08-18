import './SearchForm.css';
import searchImg from '../../images/search-img.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__input-block'>
        <img src={searchImg} className='search-form__image' alt='icon' />
        <input className='search-form__input' placeholder='Фильм' type='text' />
        <button className='search-form__button' type='submit'></button>
      </div>
      <div className='search-form__filter-checkbox'>
        <FilterCheckbox />
      </div>
    </form>
  )
}