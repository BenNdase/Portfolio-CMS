import "./Card.scss";
import { Icon } from '@iconify/react';

const Card = ({icon,title,description}) => {
    return(
        <div className="card-services">
            <Icon icon={icon} className="icon" />
        </div>
    )
}
export default Card;