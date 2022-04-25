import "./Card.scss";
import { Icon } from "@iconify/react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-services">
      <Icon icon={icon} className="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Card;
