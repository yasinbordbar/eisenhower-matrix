import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Quadrant = ({ type, count }: any) => {
  const { url, title, description, counterColor } = type;

  return (
    <div className={styles.center}>
      <Link href={`/tasks/${url}`}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className="text-center">
            <span
              style={{ background: counterColor }}
              className={styles.counter}
            >
              {count}
            </span>
          </p>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Quadrant;
