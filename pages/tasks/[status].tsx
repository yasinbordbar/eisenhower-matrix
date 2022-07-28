import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Task from "../../components/Task";
import axios from "axios";
import AddButton from "../../components/add-task/AddButton";
import { useEffect, useState } from "react";
import CustomLoading from "../../components/CustomLoading";

const Status = () => {
  const router = useRouter();
  const { status } = router.query;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTitle = () => {
    if (typeof status === "string") {
      return status
        .split("-")
        .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
        .join(" ");
    }
  };

  const getTasks = () => {
    setLoading(true);
    axios.get(`http://localhost:3000/tasks/type/${status}`).then((res) => {
      setTasks(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Head>
        <title>{status} tasks</title>
        <meta name="description" content={`${status} tasks`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddButton getTasks={getTasks} status={status} />

      <div className="text-center">
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>

      <p className="text-center bold font-30">{getTitle()}</p>

      {loading ? (
        <CustomLoading />
      ) : (
        tasks?.map((task: any) => (
          <Task
            key={task.id}
            title={task.title}
            id={task.id}
            getTasks={getTasks}
          />
        ))
      )}
    </div>
  );
};

export default Status;
