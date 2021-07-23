import "./Header.scss";
import { Icon } from "@iconify/react";
import facebookFilled from "@iconify-icons/ant-design/facebook-filled";
import twitterSquareFilled from "@iconify-icons/ant-design/twitter-square-filled";
import linkedinFilled from "@iconify-icons/ant-design/linkedin-filled";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__icons">
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
        </div>
        <div className="header__presentation">
          <h1>Benjamin Tondase</h1>
          <p>Développeur web et web mobile full stack</p>
        </div>
        <div className="header__contact">
          <Button className="btn btn__service" variant="contained" color="primary" href="#contained-buttons">
            Mes services
          </Button>
          <Button className="btn btn__contact" variant="contained" color="primary" href="#contained-buttons">
            Me contacter
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
