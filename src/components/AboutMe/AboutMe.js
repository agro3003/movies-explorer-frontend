import './AboutMe.css';
import myFoto from '../../images/myfoto.jpg';

export default function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <p className='about-me__header'>Студент</p>
      <div className='about-me__block'>
        <div className='about-me__block-text'>
          <h2 className='about-me__name'>Роман</h2>
          <p className='about-me__age'>Инженер, 40 лет</p>
          <p className='about-me__text'>
            Я родился в белокаменной, где и прибываю, по сей день. Недавно ,думал, что начал кодить, но смущают
            навыки Mongo и Express. Работаю в своем ИП. После того, как пройду курс Веб-разработки, чую..., начну учить Pyton и SQL.
            Характер скверный, не женат.
          </p>
        </div>
        <img className='about-me__foto' src={myFoto} alt='my foto' />
      </div>
      <div className='about-me__links'>
        <a className='about-me__link' href='https://vk.com/id266307498' target='_blank' rel='noreferrer'>VK</a>
        <a className='about-me__link' href='https://github.com/agro3003' target='_blank' rel='noreferrer'>Github</a>
      </div>
    </section>
  )
}