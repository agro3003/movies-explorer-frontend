import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
  return (
    <main>
      <div className='main__promo'>
        <Promo />
      </div>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}