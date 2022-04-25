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
      <div className="about__description">
        <p>
          <span>
            Je suis un développeur full-stack capable de construire des
            applications web, mobile et desktop.
          </span>
          <span>
            Ma passion pour le développement web commence en 2019 et dès lors,
            j'ai mis tout en oeuvre pour percer dans cette voie, tout en prenant
            du plaisir sur les divers projets développés.
          </span>
          <span>
            En Février 2021, je décide de suivre une formation qui va me booster
            dans le développement web et mobile, et aussi dans le maquettage des
            applications.
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
