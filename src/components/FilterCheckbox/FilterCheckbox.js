import React from 'react'
import './FilterCheckbox.css'

export default function FilterCheckbox({ checkboxStatus, setCheckboxStatus }) {

  const changeChecked = () => {
    setCheckboxStatus(!checkboxStatus);
  }
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__default"
        type="checkbox"
        onChange={changeChecked}
        checked={checkboxStatus} />
      <span
        className="filter-checkbox__slider"
      />
      <span className="filter-checkbox__label">Короткометражки</span>
    </label>
  )
}