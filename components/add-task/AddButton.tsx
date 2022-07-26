import React, { useState } from "react";
import { Modal } from "antd";
import AddForm from "./AddForm";

const AddButton = ({ status, getTasks }: any) => {
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
        title="Add Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddForm
          setIsModalVisible={setIsModalVisible}
          getTasks={getTasks}
          status={status}
        />
      </Modal>
    </div>
  );
};

export default AddButton;
