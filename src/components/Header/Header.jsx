import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__presentation">
          <h1>Benjamin Tondase</h1>
          <p>Développeur full stack {"&"} UI | UX Designer</p>
        </div>
        <div className="header__contact">
          <Button
            text="Mes services"
            color="blue"
            className="button"
            href="#services"
          />
          <Button
            text="Me contacter"
            color="white"
            className="button"
            href="#contact"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
