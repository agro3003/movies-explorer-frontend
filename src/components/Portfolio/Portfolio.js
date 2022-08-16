import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='portfolio__header'>Портфолио</p>
      <a className='portfolio__link' href='https://github.com/agro3003/how-to-learn' target='_blank' rel='noreferrer'>Статический сайт<p className='portfolio__arrow'>&#8599;</p></a>
      <a className='portfolio__link' href='https://github.com/agro3003/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт<p className='portfolio__arrow'>&#8599;</p></a>
      <a className='portfolio__link' href='https://github.com/agro3003/react-mesto-api-full' target='_blank' rel='noreferrer'>Одностаничое приложение<p className='portfolio__arrow'>&#8599;</p></a>
    </section>
  )
}