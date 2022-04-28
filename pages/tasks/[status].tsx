import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { TaskStatus } from "../../types/indes";
import Task from "../../components/Task";

const Status = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "test",
      status: TaskStatus.UrgentImportant,
    },
    {
      id: 2,
      title: "test",
      status: TaskStatus.UrgentImportant,
    },
  ]);
  const router = useRouter();

  const { status } = router.query;

  const getTitle = () => {
    if (typeof status === "string") {
      return status
        .split("-")
        .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
        .join(" ");
    }
  };
  return (
    <div>
      <Head>
        <title>{status} tasks</title>
        <meta name="description" content={`${status} tasks`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>

      <p className="text-center bold font-30">{getTitle()}</p>

      {tasks.map((task: any) => (
        <Task key={task.id} title={task.title} />
      ))}
    </div>
  );
};

export default Status;
