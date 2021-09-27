import "./button.scss";

const Button = ({ btnText, btnType }) => {
return (
    <button className={`btn-${btnType}`}>{btnText}</button>
  )
}

export default Button;