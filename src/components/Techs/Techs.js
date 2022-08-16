import './Techs.css';

export default function Techs() {
  return (
    <section className='techs' id='techs'>
      <p className='techs__header'>Технологии</p>
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <div className='techs__items'>
        <div className='techs__item'>HTML</div>
        <div className='techs__item'>CSS</div>
        <div className='techs__item'>JS</div>
        <div className='techs__item'>React</div>
        <div className='techs__item'>Git</div>
        <div className='techs__item'>Express.js</div>
        <div className='techs__item'>mongoDB</div>
      </div>
    </section>
  )
}