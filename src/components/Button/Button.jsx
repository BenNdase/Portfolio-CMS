import "./Button.scss";
import Button from "@material-ui/core/Button";


const Buttons = ({text,color, className}) => {
    return(
        <div>
            <Button className={`btn ${color} ${className}`} variant="contained" color="primary" href="#contained-buttons">
               {text}
            </Button>
        </div>
    )
}
export default Buttons;