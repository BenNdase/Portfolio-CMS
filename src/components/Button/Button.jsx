import "./Button.scss";
import Button from "@material-ui/core/Button";

const Buttons = ({ text, color, className, href }) => {
  return (
    <Button
      className={`btn ${color} ${className}`}
      variant="contained"
      color="secondary"
      href={href}
    >
      {text}
    </Button>
  );
};
export default Buttons;
