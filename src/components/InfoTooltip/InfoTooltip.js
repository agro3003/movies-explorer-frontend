import React from 'react';
import './InfoTooltip.css';
import buttonClose from '../../images/close-button.svg';
import imageErrorReg from '../../images/error-regist.svg';
import imageSucces from '../../images/info-succes.svg';

export default function InfoTooltip({ isInfoTooltip, onClose }) {
  return (
    <div className={`popup ${isInfoTooltip.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__button-close" type="button" onClick={onClose}><img className="popup__button-close-img"
          src={buttonClose} alt="кнопка закрыть" /></button>
        <img src={isInfoTooltip.status ? imageSucces : imageErrorReg} className="popup__tooltip-image" alt="попап статуса" />
        <p className="popup__tooltip-text">{isInfoTooltip.text}</p>
      </div>
    </div>
  );
}


