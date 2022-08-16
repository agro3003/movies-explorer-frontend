import './FilterCheckbox.css'

export default function FilterCheckbox() {

  return (
    <label className="switch">
      <input className="switch__default" type="checkbox" />
      <span
        className="switch__slider"
      />
      <span className="switch__label">Короткометражки</span>
    </label>
  )
}