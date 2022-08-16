import './Footer.css';
import { Route, Switch } from 'react-router-dom';

export default function Footer() {
  return (
    <Switch>
      <Route exact path={['/', '/movies', '/saved-movies']}>
        <footer className='footer'>
          <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className='footer__bottom-block'>
            <p className='footer__copy'>&copy; 2022</p>
            <div className='footer__links'>
              <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
              <a className='footer__link' href='https://github.com' target='_blank' rel='noreferrer'>Github</a>
              <a className='footer__link' href='https://vk.com' target='_blank' rel='noreferrer'>VK</a>
            </div>
          </div>
        </footer>
      </Route>
    </Switch>
  )
}