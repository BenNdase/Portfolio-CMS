import "./Services.scss";
import Card from "../Card/Card-Services/Card";
// import codeIcon from '@iconify-icons/fa-solid/code';
// import roundDesignServices from '@iconify-icons/ic/round-design-services';
// import desktopComputer from '@iconify-icons/emojione/desktop-computer';

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">
        <hr className="line-top" />
        <h2>Mes services</h2>
      </div>
      {/* <div className="services__card">
        <Card icon={codeIcon} title="Développement web" description="Création des sites web responsive" />
        <Card icon={roundDesignServices} title="UI | UX Design" description="Creations des maquettes pour vos sites web" />
        <Card icon={desktopComputer} title="Application desktop" description="Creations des maquettes pour vos sites web" />
      </div> */}
    </div>
  );
};
export default Services;
