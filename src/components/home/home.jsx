import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Desplazarse hacia abajo.</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre mi</span> <br />
        <p>
          Estudie 3 años Diseño Industrial, una carrera facinante, luego encontre este maravilloso mundo de la programacion, empezando a estudiar
          html, pase a css, y posteriormente a javascrip, hice varias paginas, y termine adentrandome el el framework de react, posteriormente
          pase al back-end pasando por mysql, y ahora estoy en la creacion de apis.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;