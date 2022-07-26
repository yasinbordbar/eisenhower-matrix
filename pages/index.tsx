import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quadrant from "../components/layout/Quadrant";
import Index from "../components/add-task";
import { taskTypes } from "../utils/taskTypes";
import CustomRow from "../components/layout/CustomRow";
import AddButton from "../components/add-task/AddButton";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eisenhower Matrix</title>
      </Head>
      <AddButton />
      <CustomRow>
        <Quadrant type={taskTypes.urgentImportant} />
        <Quadrant type={taskTypes.notUrgentImportant} />
      </CustomRow>
      <CustomRow>
        <Quadrant type={taskTypes.urgentNotImportant} />
        <Quadrant type={taskTypes.notUrgentNotImportant} />
      </CustomRow>
    </div>
  );
};

export default Home;
