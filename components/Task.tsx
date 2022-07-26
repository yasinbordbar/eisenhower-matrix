import styles from "../styles/Task.module.css";
import { Button, Col, Modal, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState } from "react";
import AddForm from "./add-task/AddForm";

const Task = ({ title, id, getTasks, status }: any) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => getTasks());
  };

  const [taskDetails, setTaskDetails] = useState<any>();

  const getDetails = () => {
    axios
      .get(`http://localhost:3000/tasks/id/${id}`)
      .then((res) => setTaskDetails(res.data))
      .then(() => showModal());
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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

      <Modal
        title="Edit Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddForm
          setIsModalVisible={setIsModalVisible}
          getTasks={getTasks}
          status={status}
          taskDetails={taskDetails}
        />
      </Modal>
    </div>
  );
};

export default Task;
