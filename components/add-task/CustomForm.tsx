import { Button, Checkbox, Form, Input } from "antd";
import {
  createTaskService,
  updateTaskService,
} from "../../services/Task.service";
import { ICustomFormProps } from "../../interfaces/props.interface";
import { ITask } from "../../interfaces";

const CustomForm = ({
  status,
  getTasks,
  setIsModalVisible,
  taskDetails,
  getNumberOfTasks,
}: ICustomFormProps) => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const EDIT_MODE = !!taskDetails;
  const HOME_PAGE_MODE = !!getNumberOfTasks;
  const initialValues = EDIT_MODE
    ? {
        title: taskDetails.title,
        description: taskDetails.description,
        isImportant: taskDetails.isImportant,
        isUrgent: taskDetails.isUrgent,
      }
    : {
        title: "",
        description: "",
        isImportant:
          status === "not-urgent-important" || status === "urgent-important",
        isUrgent:
          status === "urgent-important" || status === "urgent-not-important",
      };

  const onFinish = async (values: ITask) => {
    if (EDIT_MODE) {
      await updateTaskService(taskDetails.id, values);
      closeModalAndUpdate();
    } else {
      await createTaskService(values);
      closeModalAndUpdate();
      if (HOME_PAGE_MODE) getNumberOfTasks();
    }
  };

  const closeModalAndUpdate = () => {
    if (getTasks) getTasks();
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValues}
        onFinish={onFinish}
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

export default CustomForm;
