import './NotFound.css';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  const stepBack = () => {
    history.go(-2);
  }

  return (
    <section className='not-found'>
      <div className='not-found__title'>
        <h2 className='not-found__number'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <button type='button' className='not-found__go-back' onClick={stepBack}>Назад</button>
    </section>
  );
}