import "./Project.scss";
import Card from "../Card/Card-Projects/Card";
import Image from "../../assets/infractionroutiere.jpg"

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__title">
        <hr className="line-top" />
        <h2>Mes projets</h2>
      </div>
      <div className="projects__card">
        <Card title="Benelux Afro Center" image={Image} />
        <Card title="Benelux Afro Center" image={Image} />
        <Card title="Benelux Afro Center" image={Image} />
        <Card title="Benelux Afro Center" image={Image} />
        <Card title="Benelux Afro Center" image={Image} />
        <Card title="Benelux Afro Center" image={Image} />
      </div>
    </div>
  );
};
export default Projects;
