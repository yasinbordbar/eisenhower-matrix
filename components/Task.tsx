import styles from "../styles/Task.module.css";

const Task = ({ title }: any) => {
  return (
    <div>
      <h1 className={styles.taskTitle}>{title}</h1>
    </div>
  );
};

export default Task;
