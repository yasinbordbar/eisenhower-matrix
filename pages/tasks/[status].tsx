import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Task from "../../components/Task";
import AddTask from "../../components/AddTask";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Status = () => {
  const router = useRouter();
  const { status } = router.query;

  const { data: tasks, error } = useSWR(
    `http://localhost:3000/tasks/${status}`,
    fetcher
  );
  console.log(tasks);

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
      <AddTask status={status} />

      <div className="text-center">
        <Link href="/">
          <button>Back</button>
        </Link>
      </div>

      <p className="text-center bold font-30">{getTitle()}</p>

      {tasks?.map((task: any) => (
        <Task key={task.id} title={task.title} />
      ))}
    </div>
  );
};

export default Status;
