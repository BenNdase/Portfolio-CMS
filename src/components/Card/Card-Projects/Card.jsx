import "./Card.scss";
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom"

const Card = ({image ,title, link_github, view}) => {
  return (
    <div className="card-project">
      <img src={image} alt={title} />
      <div className="card-project__description">
        <Link>
          <Icon icon="akar-icons:github-fill" />
        </Link>
        <h3>{title}</h3>
        <Icon icon="icon-park-outline:eyes" />
      </div>
    </div>
  );
};
export default Card;