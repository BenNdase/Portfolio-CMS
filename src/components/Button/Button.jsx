import "./Button.scss";
import Button from "@material-ui/core/Button";


const Buttons = ({text,color}) => {
    return(
        <div>
            <Button className={`btn ${color}`} variant="contained" color="primary" href="#contained-buttons">
               {text}
            </Button>
        </div>
    )
}
export default Buttons;