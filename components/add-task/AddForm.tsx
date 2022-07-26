import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";

const AddForm = ({ status, getTasks, setIsModalVisible }: any) => {
  const initialValues = {
    title: "",
    description: "",
    isImportant:
      status === "not-urgent-important" || status === "urgent-important",
    isUrgent:
      status === "urgent-important" || status === "urgent-not-important",
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    axios.post("http://localhost:3000/tasks", values).then((res) => {
      console.log(res);
      getTasks();
      setIsModalVisible(false);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          // rules={[{ required: true, message: "Please input your password!" }]}
        >
          <TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="isImportant"
          valuePropName="checked"
          wrapperCol={{ offset: 6, span: 16 }}
        >
          <Checkbox defaultChecked={initialValues.isImportant}>
            Is Important?
          </Checkbox>
        </Form.Item>

        <Form.Item
          name="isUrgent"
          valuePropName="checked"
          wrapperCol={{ offset: 6, span: 16 }}
        >
          <Checkbox defaultChecked={initialValues.isUrgent}>
            Is Urgent?
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddForm;
