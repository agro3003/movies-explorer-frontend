import './FilterCheckbox.css'

export default function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__default" type="checkbox" />
      <span
        className="filter-checkbox__slider"
      />
      <span className="filter-checkbox__label">Короткометражки</span>
    </label>
  )
}