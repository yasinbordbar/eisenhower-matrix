import styles from "../styles/Task.module.css";
import { Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { log } from "util";

const Task = ({ title, id, getTasks }: any) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => getTasks());
  };

  const getDetails = () => {
    //TODO: ADD TO SERVER
    axios
      .get(`http://localhost:3000/tasks/${id}`)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <Row className={styles.taskTitle}>
        <Col span={20}>
          <h1>{title} </h1>
        </Col>
        <Col span={2}>
          <Button onClick={getDetails} className="btn-edit">
            <EditOutlined />
          </Button>
        </Col>
        <Col span={2}>
          <Button onClick={handleDelete} className="btn-delete">
            <DeleteOutlined />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Task;
