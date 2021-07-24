import "./Services.scss";
import Card from "../Card/Card-Services/Card";
import codeIcon from '@iconify-icons/fa-solid/code';


const Services = () => {
  return (
    <div className="services">
      <div className="services__title">
        <hr className="line-top" />
        <h2>Mes services</h2>
        <hr className="line-bottom" />
      </div>
      <div className="services__card">
        <Card icon={codeIcon} />
      </div>
    </div>
  );
};
export default Services;
