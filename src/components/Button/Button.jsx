import css from "./Button.module.css";

export default function Button(props) {
  const { type = "button", className, color, children, ...restProps } = props;
  let btnStyle = color === "white" ? css["btn-white"] : css["btn-red"];
  if (className) btnStyle += " " + className;
  return (
    <button type={type} className={btnStyle} {...restProps}>
      {children}
    </button>
  );
}
