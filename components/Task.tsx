import styles from "../styles/Task.module.css";
import { Button, Col, Modal, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import CustomForm from "./add-task/CustomForm";
import {
  deleteTaskService,
  getTaskByIdService,
} from "../services/Task.service";
import { ITaskProps } from "../interfaces/props.interface";
import { ITask } from "../interfaces";

const Task = ({ title, id, getTasks, status }: ITaskProps) => {
  const [taskDetails, setTaskDetails] = useState<ITask>();
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
      <Row className={styles.task}>
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
