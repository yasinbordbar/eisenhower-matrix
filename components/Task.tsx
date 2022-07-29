import styles from "../styles/Task.module.css";
import { Button, Col, Modal, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import CustomForm from "./add-task/CustomForm";
import { ITask } from "../types";
import {
  deleteTaskService,
  getTaskByIdService,
} from "../services/Task.service";

const Task = ({ title, id, getTasks, status }: ITask) => {
  const [taskDetails, setTaskDetails] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = async () => {
    await deleteTaskService(id);
    getTasks();
  };

  const handleEdit = async () => {
    const { data } = await getTaskByIdService(id);
    setTaskDetails(data);
    showModal();
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
