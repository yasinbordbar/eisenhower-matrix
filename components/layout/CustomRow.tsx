import styles from "../../styles/Home.module.css";
import { ICustomRow } from "../../types";

const CustomRow = ({ children }: ICustomRow) => {
  return <div className={styles.row}>{children}</div>;
};

export default CustomRow;
