import React from "react";
import AddClient from "./add-client/AddClient";
import  './right-section.scss'
import ViewClient from "./view-client/ViewClient";

const RightSection = () => {
  return (
    <div className="col-md-10 col-sm-12 right-section py-3 px-4" style={{border:'1px solid red'}}>
      <div className="header ">
        <h4>View Clients</h4>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#" className="breadcrumb-first">Client Master</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
            View Clients
            </li>
          </ol>
        </nav>
      </div>
      {/* <ViewClient/> */}
     <AddClient/>
    </div>
  );
};

export default RightSection;
