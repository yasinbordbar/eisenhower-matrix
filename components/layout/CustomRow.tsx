import styles from "../../styles/Home.module.css";

const CustomRow = ({ children }: any) => {
  return <div className={styles.row}>{children}</div>;
};

export default CustomRow;
