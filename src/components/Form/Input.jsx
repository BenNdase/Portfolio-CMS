import "./Form.scss";

const Input = ({type, placeholder, value, className}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} className={className} />
  );
};

export default Input;