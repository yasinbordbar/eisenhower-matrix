import styles from "../styles/Task.module.css";
import { Button, Col, Modal, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState } from "react";
import CustomForm from "./add-task/CustomForm";

const Task = ({ title, id, getTasks, status }: any) => {
  const [taskDetails, setTaskDetails] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => getTasks());
  };

  const handleEdit = () => {
    axios
      .get(`http://localhost:3000/tasks/${id}`)
      .then((res) => setTaskDetails(res.data))
      .then(() => showModal());
  };

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
          <Button onClick={handleEdit} className="btn-edit">
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
        centered
        title="Edit Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <CustomForm
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
