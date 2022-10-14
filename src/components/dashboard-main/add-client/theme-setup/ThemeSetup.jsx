import React from "react";
import Form from "react-bootstrap/Form";
import { BsFillCircleFill } from "react-icons/bs";
import {
  MdOutlineErrorOutline,
  MdOutlineRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
const ThemeSetup = () => {
  return (
    <div className="theme-setup px-3">
      <div className="header my-2">
        <h3>Theme Setup</h3>
        <p>
          Add information about the client to give them a personalized
          experience.
        </p>
      </div>
      <div className="row">
        <div className="primary-color-section">
          <fieldset className="border rounded-3  d-flex  justify-content-between px-3 ">
            <legend className="float-none w-auto px-1">Primary color</legend>
            <p>
              <BsFillCircleFill /> #153AC7
            </p>
            <MdOutlineErrorOutline />
          </fieldset>
        </div>
        <div className="mt-2  para">
          <p>Add Hex Value.</p>
        </div>
        <div className="login-theme">
          <h5>Login Theme</h5>
          <p>Select the look and feel of the login page.</p>
        </div>

        <div className="color-section">
          <p>
            <MdOutlineRadioButtonChecked className="text-primary" /> &nbsp;Use
            Color
          </p>
          <div className="box-section d-flex justify-content-between align-items-center ms-4">
            <div className="icon-color">
              <BsFillCircleFill /> &nbsp; #F8F9FD
            </div>
            <MdOutlineErrorOutline />
          </div>
          <div className="theme-color">
            <h5 className="heading">Where Should be the login modal?</h5>
            <div className="boxes d-flex ">
              <div className="box d-flex justify-content-start align-items-center ">
                <div className="left"></div>
              </div>
              <Form.Check type="radio" id="left" label="Left" />
              <div className="box d-flex justify-content-center align-items-center">
                <div className="right "></div>
              </div>
              <Form.Check type="radio" id="right" label="Right" />
              <div className="box d-flex justify-content-end align-items-center">
                <div className="center "></div>
              </div>
              <Form.Check type="radio" id="center" label="Center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetup;
