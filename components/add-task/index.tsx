import { Field, Form, Formik, FormikHelpers } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Values } from "../../types/indes";
import AddButton from "./AddButton";
import AddForm from "./AddForm";

const Index = ({ status }: any) => {
  return (
    <div>
      {/*<div>*/}
      {/*  <Popup trigger={AddButton} modal nested>*/}
      {/*
      {/*    {(close: any) => (*/}
      {/*      <div className="modal">*/}
      {/*        <button className="close" onClick={close}>*/}
      {/*          &times;*/}
      {/*        </button>*/}
      {/*        /!*<div className="header"> Add Task </div>*!/*/}
      {/*        <div className="content">*/}
      {/*          <AddForm status={status} />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </Popup>*/}
      {/*</div>*/}
    </div>
  );
};

export default Index;
