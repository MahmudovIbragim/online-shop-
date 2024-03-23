import { FC, ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  color?: string;
  width: string;
}
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  color,
  width,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{ backgroundColor: color, width }}
      className={`btn ${
        variant === "primary" ? "btn-primary" : "btn-secondary"
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
