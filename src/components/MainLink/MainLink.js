import './MainLink.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function MainLink() {
  return (
    <div className="main-link">
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
    </div>
  )
}