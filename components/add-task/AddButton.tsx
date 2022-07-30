import React, { useState } from "react";
import { Modal } from "antd";
import CustomForm from "./CustomForm";
import { IAddButtonProps } from "../../interfaces/props.interface";

const AddButton = ({ status, getTasks, getNumberOfTasks }: IAddButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="text-center">
      <button className="btn" onClick={showModal}>
        Add Task
      </button>

      <Modal
        centered
        title="Add Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <CustomForm
          setIsModalVisible={setIsModalVisible}
          getTasks={getTasks}
          status={status}
          getNumberOfTasks={getNumberOfTasks}
        />
      </Modal>
    </div>
  );
};

export default AddButton;
