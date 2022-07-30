import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quadrant from "../components/layout/Quadrant";
import { taskTypes } from "../utils/taskTypes";
import CustomRow from "../components/layout/CustomRow";
import AddButton from "../components/add-task/AddButton";
import { useEffect, useState } from "react";
import CustomLoading from "../components/CustomLoading";
import { getTasksCounterService } from "../services/Task.service";

const Home: NextPage = () => {
  const [numberOfTasks, setNumberOfTasks] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const getNumberOfTasks = async () => {
    setLoading(true);
    const { data } = await getTasksCounterService();
    setNumberOfTasks(data);
    setLoading(false);
  };

  useEffect(() => {
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
          <AddButton getNumberOfTasks={getNumberOfTasks} />
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
