import "./Services.scss";
import Card from "../Card/Card-Services/Card";
// import codeIcon from '@iconify-icons/fa-solid/code';
// import roundDesignServices from '@iconify-icons/ic/round-design-services';
// import desktopComputer from '@iconify-icons/emojione/desktop-computer';

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services__title">
        <hr className="line-top" />
        <h2>Mes services</h2>
      </div>
      <div className="services__card">
        <Card
          icon="entypo:code"
          title="Développement web"
          description="Création des sites web responsive"
        />
        <Card
          icon="ic:sharp-design-services"
          title="UI | UX Design"
          description="Creations des maquettes pour vos sites web"
        />
        <Card
          icon="akar-icons:desktop-device"
          title="Application desktop"
          description="Creations des maquettes pour vos sites web"
        />
      </div>
    </div>
  );
};
export default Services;
