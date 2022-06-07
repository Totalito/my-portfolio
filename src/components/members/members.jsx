import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Perfil</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Gonzalo Matias Moreira</h1>
          <h3 className="position">Full-stack Junior Web Developer</h3>
          <h4 className="about">
            Mis titulos: Responsabilidad Social Empresarial, RR.HH, Gestion de Marketing, Responsive Web Disign.
            Soy una persona responsable, que dia tras dia se quiere superar, abierto a todas las opiniones,
            me encanta estudiar y aprender, disponibilidad Full Time.

          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactar</span>
          </a>
        </div>
      </div>
      {/*
      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">GGonzalo</h1>
          <h3 className="position">Otro Lider</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactar</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">GGGonzalo</h1>
          <h3 className="position">Otro lider</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactar</span>
          </a>
        </div>
      </div>
      */}
    </div>
  );
};

export default Members;