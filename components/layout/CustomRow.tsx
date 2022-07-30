import styles from "../../styles/Home.module.css";
import { ICustomRowProps } from "../../interfaces/props.interface";

const CustomRow = ({ children }: ICustomRowProps) => {
  return <div className={styles.row}>{children}</div>;
};

export default CustomRow;
