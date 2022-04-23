import "./Header.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        {/* <div className="header__icons">
          <Link className="link_icon" to="">
            <Icon icon={facebookFilled} className="icon" />
          </Link>
          <Link className="link_icon" to="">
            <Icon icon={twitterSquareFilled} className="icon" />
          </Link>
          <Link className="link_icon" to="">
            <Icon icon={linkedinFilled} className="icon" />
          </Link>
          <Link className="link_icon" to="">
            <Icon icon={instagramFilled} className="icon" />
          </Link>
        </div> */}
        <div className="header__presentation">
          <h1>Benjamin Tondase</h1>
          <p>Développeur web et web mobile full stack</p>
        </div>
        <div className="header__contact">
          <Button text="Mes services" color="blue" className="button" />
          <Button text="Me contacter" color="white" className="button" />
        </div>
      </div>
    </div>
  );
};
export default Header;
