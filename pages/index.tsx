import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quadrant from "../components/layout/Quadrant";
import { taskTypes } from "../utils/taskTypes";
import CustomRow from "../components/layout/CustomRow";
import AddButton from "../components/add-task/AddButton";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomLoading from "../components/CustomLoading";

const Home: NextPage = () => {
  const [numberOfTasks, setNumberOfTasks] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNumberOfTasks = () => {
      setLoading(true);
      axios.get(`http://localhost:3000/tasks/counts/tasks`).then((r) => {
        setNumberOfTasks(r.data);
        setLoading(false);
      });
    };

    getNumberOfTasks();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eisenhower Matrix</title>
      </Head>
      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {" "}
          <AddButton />
          <CustomRow>
            <Quadrant
              type={taskTypes.urgentImportant}
              count={numberOfTasks.urgentImportantCount}
            />
            <Quadrant
              type={taskTypes.notUrgentImportant}
              count={numberOfTasks.notUrgentImportantCount}
            />
          </CustomRow>
          <CustomRow>
            <Quadrant
              type={taskTypes.urgentNotImportant}
              count={numberOfTasks.urgentNotImportantCount}
            />
            <Quadrant
              type={taskTypes.notUrgentNotImportant}
              count={numberOfTasks.notUrgentNotImportantCount}
            />
          </CustomRow>
        </>
      )}
    </div>
  );
};

export default Home;
