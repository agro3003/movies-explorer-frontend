import './SearchForm.css';
import searchImg from '../../images/search-img.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../utils/useFormWithValidation';

export default function SearchForm({ addShowCards, valueSerchMovies, setCheckboxStatus, checkboxStatus, setValueSearchMovies}) {
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
    <form onSubmit={handleSubmit} className='search-form'>
      <div className='search-form__input-block'>
        <img src={searchImg} className='search-form__image' alt='icon' />
        <input name='search' value={values.search || ''} onChange={handleChange} className='search-form__input' placeholder={valueSerchMovies} type='text' required />
        <button className='search-form__button' type='submit'></button>
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