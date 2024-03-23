import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import styles from "./Custom.module.scss";
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  width: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}
const Input: FC<InputProps> = ({ label, width, onChange, ...rest }) => {

  return (
    <div className={styles.box}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        onChange={onChange}
        style={{ width, height: "30px" }}
        {...rest}
      />
    </div>
  );
};
export default Input;
