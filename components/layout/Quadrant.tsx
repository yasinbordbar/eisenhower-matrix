import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { IQuadrantProps } from "../../interfaces/props.interface";

const Quadrant = ({ type, count }: IQuadrantProps) => {
  const { url, title, description, counterColor } = type;

  return (
    <div className={styles.center}>
      <Link passHref href={`/tasks/${url}`}>
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
