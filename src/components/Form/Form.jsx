import "./Form.scss";
import InputField from "./Input";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form>
      <span>
        <InputField type="text" placeholder="Votre nom" />
        <InputField type="email" placeholder="Votre email" />
      </span>
      <InputField type="email" placeholder="Sujet" />
      <textarea placeholder="Message" />
      <Button text="Envoyer" className="btn__contact" />
    </form>
  );
};

export default Form;
