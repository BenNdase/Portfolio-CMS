import "./About.scss";
import computer from "../../assets/computer.svg";
import Button from "../Button/Button";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <hr className="line-top" />
        <h2>A propos</h2>
      </div>
      <p className="about__presentation">
        Je suis un développeur web et web mobile full stack
      </p>
      <div className="about__description">
        <p>
          <span>
            Ma passion pour le développement web commence en 2019 et m'a demandé
            un changement radical de cursus afin de pouvoir pleinement
            l'exploiter.
          </span>
          <span>
            Dès lors, je mis tout en oeuvre pour percer dans cette voie, tout en
            prenant du plaisir sur les divers projets développés.
          </span>
          <span>
            En Mai 2009, je décide de devenir développeur web indépendant après
            plusieurs postes en tant que développeur web « full-stack » réussis,
            qui me conforteront dans cette idée afin de toucher un plus large
            panel de domaines d'activités, voir du pays et conquérir le monde !
          </span>
        </p>
        <div className="logo">
          <img src={computer} alt="Logo computer" />
        </div>
      </div>
      <div className="button-container">
        <Button text="Télécharger mon cv" color="blue" />
      </div>
    </div>
  );
};
export default About;
