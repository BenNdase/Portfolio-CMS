import "./Skills.scss";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title">
        <hr className="line-top" />
        <h2>Mes compétences</h2>
      </div>
      <div className="skills__container">
        <div className="skills__soft">
          <h3>Soft Skills</h3>
          <p>
            <span>&gt; </span>
            <span>Capacité d'adaptation et du travail en équipe.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Gestion des projets avec la méthodologie agile (SCRUM, KANBAN).
            </span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Conception et modélisation des systèmes d'information (UML et
              MERISE).
            </span>
          </p>
          <p>
            <span>&gt; </span>
            <span>Création et gestion des bases de données.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>Maquettage des applications.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Réalisation des interfaces utilisateur web statiques, dynamiques
              et adaptative.
            </span>
          </p>
        </div>
        <div className="skills__hard">
          <h3>Technologies</h3>
          <div className="skills__icons">
            <div className="container__icon">
              <Icon icon="logos:javascript" className="icon" />
              <span>JavaScript</span>
            </div>
            <div className="container__icon">
              <Icon icon="vscode-icons:file-type-reactjs" className="icon" />
              <span>React Js</span>
            </div>
            <div className="container__icon">
              <Icon icon="vscode-icons:file-type-sass" className="icon" />
              <span>Sass</span>
            </div>
            <div className="container__icon">
              <Icon icon="logos:nodejs-icon" className="icon" />
              <span>NodeJS</span>
            </div>
            <div className="container__icon">
              <Icon icon="logos:mysql" className="icon" />
              <span>MySQL</span>
            </div>
            <div className="container__icon">
              <Icon icon="bxl:mongodb" color="#12e643" className="icon" />
              <span>MongoDB</span>
            </div>
            <div className="container__icon">
              <Icon icon="logos:figma" className="icon" />
              <br />
              <span>Figma</span>
            </div>
            <div className="container__icon">
              <Icon icon="logos:strapi-icon" className="icon" />
              <span>Strapi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
