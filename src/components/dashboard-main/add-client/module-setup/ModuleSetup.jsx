import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { FaUndoAlt } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
const ModuleSetup = () => {
  return (
    <div className="module-setup px-2">
      <div className="header my-2">
        <h3>Modules Setup</h3>
        <p>Select the modules that the client can use.</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-11 mt-4 left-side">
          <div>
            <div className="mb-3 ">
              <Form.Check
                type="checkbox"
                className="ms-4 "
                id="Home"
                label="Home / Dashboard"
              />
              <Form.Check
                type="checkbox"
                className="ms-4"
                id="Helpdesk"
                label="Helpdesk"
              />
              <Form.Check
                type="checkbox"
                className="ms-4"
                id="Assets"
                label="Assets"
              />
              <div className="form-box bg-primary text-white rounded ms-3 d-flex justify-content-between align-items-center ">
                <Form.Check
                  type="checkbox"
                  className="ms-4  p-2"
                  id="cheque"
                  label="Daily Tasks"
                />
                <MdArrowForwardIos className="me-2 " />
              </div>

              <Form.Check
                type="checkbox"
                className="ms-4"
                id="other"
                label="PPM"
              />
              <Form.Check
                type="checkbox"
                className="ms-4"
                id="other"
                label="Employees"
              />
              <Form.Check
                type="checkbox"
                className="ms-4"
                id="other"
                label="Profile"
              />
              <Form.Check
                type="checkbox"
                className="ms-4"
                id="other"
                label="Transactions"
              />
            </div>
          </div>
        </div>
        <div className="col-md-9 rounded  col-sm-11 right-side ">
          <div className="daily-task d-flex border-bottom align-items-center justify-content-between px-2 flex-wrap py-3">
            <div className="left  d-flex align-items-center flex-wrap">
              <div className="btn btn-light border">
                <RiFootballLine />
              </div>
              <div className="details  ms-3 ">
                <p>Select the sub modules that the client can use.</p>
              </div>
            </div>
            <div className="right">
              <div className="btn-container ">
                <button type="button" class="btn btn-primary font-weight-bold">
                  <BsCheckLg className="me-2" />
                  Visible to Client
                </button>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-3">
            <Form.Check
              type="checkbox"
              className="ms-4 "
              id="showall"
              label="Show All Sub Modules"
            />
            <Form.Check
              type="checkbox"
              className="ms-4  "
              id="Summary"
              label="Summary"
            />
            <Form.Check
              type="checkbox"
              className="ms-4 "
              id="task"
              label="View Tasks"
            />
            <Form.Check
              type="checkbox"
              className="ms-4 "
              id="newtask"
              label="Create New Task"
            />
            <Form.Check
              type="checkbox"
              className="ms-4 "
              id="Logbook"
              label="Logbook"
            />
            <Form.Check
              type="checkbox"
              className="ms-4 "
              id="Logsheet"
              label="Logsheet"
            />
            <div className="form-checkbox ps-3">
              <Form.Check
                type="checkbox"
                className="ms-4 "
                id="Daily"
                label="Daily"
              />
              <Form.Check
                type="checkbox"
                className="ms-4 "
                id="activity"
                label="Activity Wise"
              />
            </div>
          </div>
        </div>
        <div className="btn-container  mb-4 mt-2">
          <button type="button" class="btn btn-primary font-weight-bold">
            Save & Continue <MdArrowForwardIos className="ps-2" />
          </button>
          <button type="button" class="btn ms-5 ">
            <FaUndoAlt className="me-2" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleSetup;
