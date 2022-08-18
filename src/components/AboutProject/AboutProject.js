import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__header'>О проекте</h2>
      <div className='about-project__stages'>
        <div className='about-project__stages-block'>
          <h3 className='about-project__stages-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__stages-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__stages-block'>
          <h3 className='about-project__stages-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__stages-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timing'>
        <p className='about-project__timing-element about-project__timing-element_one-week'>1 неделя</p>
        <p className='about-project__timing-element about-project__timing-element_four-week'>4 недели</p>
        <p className='about-project__timing-element about-project__timing-element_bottom-text'>Back-end</p>
        <p className='about-project__timing-element about-project__timing-element_bottom-text'>Front-end</p>
      </div>

    </section>
  )
}