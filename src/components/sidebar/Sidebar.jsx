import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch} from 'react-icons/ai';
import { MdOutlineLogout} from 'react-icons/md';

import './sidebar.scss'
const Sidebar = () => {
  return (
   
   <div className="col-md-2 col-sm-12 shadow-lg sidebar ">
     <div className=" px-3 row input-container">
      <div className="sidebar-top mx-auto pt-4 px-3">
        <h4 className="">Company name</h4>
        <InputGroup className="mb-3 d-flex ">
                  <InputGroup.Text id="basic-addon1"><AiOutlineSearch/></InputGroup.Text>
                  <Form.Control
                    placeholder="Search modules"
                    aria-label="text"
                    type="text"
                    className=" shadow-none"
                  />
        </InputGroup>

        <h3 className="">Client Master</h3>
     <button className="w-100 btn btn-primary view-client-button">View Clients</button>
     <button className="w-100 btn mt-2 view-client-button">Add Clients</button>
      </div>
      <div className="sidebar-bottom mt-auto px-3 py-2 align-self-end">
      <div className="profile-container  d-flex justify-content-between align-items-center">
        <div className="profile-left">
          <div className="profile-image d-flex align-items-center">
          <img src="./images/profile.png"/>
        <div className="profile-details ps-3">
        <p>James Burton</p>
          <span>james@thevouch.digital</span>
        </div>
          </div>

        </div>
        <div className="profile-right">
          <MdOutlineLogout/>
        </div>
      </div>
      </div>
     </div>
   </div>
  )
}

export default Sidebar