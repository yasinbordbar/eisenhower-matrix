import { Field, Form, Formik, FormikHelpers } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

const AddTask = ({ status }: any) => {
  interface Values {
    title: string;
    description: string;
    isImportant: boolean;
    isUrgent: boolean;
  }

  const initialValues = {
    title: "",
    description: "",
    isImportant:
      status === "not-urgent-important" || status === "urgent-important"
        ? true
        : false,
    isUrgent:
      status === "urgent-important" || status === "urgent-not-important"
        ? true
        : false,
  };

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log(values);
    axios
      .post("http://localhost:3000/tasks", values)
      .then((res) => console.log(res));
    setSubmitting(false);
  };

  return (
    <div>
      <div>
        <Popup
          trigger={
            <div className="text-center">
              <button className="btn">+</button>
            </div>
          }
          modal
          nested
        >
          {/*// @ts-ignore*/}
          {(close: any) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Add Task </div>
              <div className="content">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  <Form>
                    <div className="row">
                      <label htmlFor="title">Title</label>
                      <Field id="title" name="title" placeholder="Title" />
                    </div>
                    <div className="row">
                      <label htmlFor="description">Description</label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        placeholder="Description"
                      />
                    </div>

                    <div className="row">
                      <label>Is Important?</label>
                      <Field type="checkbox" name="isImportant" />
                    </div>

                    <div className="row">
                      <label>Is Urgent?</label>
                      <Field type="checkbox" name="isUrgent" />
                    </div>

                    <div className="text-center">
                      <button type="submit" className="button">
                        Submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
              {/*<div className="actions">*/}
              {/*  <button*/}
              {/*    type="submit"*/}
              {/*    className="button"*/}
              {/*    onClick={() => {*/}
              {/*      console.log("modal closed ");*/}
              {/*      close();*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    Submit*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default AddTask;
