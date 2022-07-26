import styles from "../../styles/Home.module.css";
import Quadrant from "./Quadrant";

const CustomRow = ({ children }: any) => {
  return <div className={styles.row}>{children}</div>;
};

export default CustomRow;
