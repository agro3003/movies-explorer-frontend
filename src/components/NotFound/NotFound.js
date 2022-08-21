import './NotFound.css';
import { Link, useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <section className='not-found'>
      <div className='not-found__title'>
        <h2 className='not-found__number'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <Link className='not-found__go-back' onClick={goBack}>Назад</Link>
    </section>
  );
}