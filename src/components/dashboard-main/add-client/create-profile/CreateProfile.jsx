import React from 'react'
import './create-profile.scss'
import {FaAngleRight} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaUndoAlt} from 'react-icons/fa'
const CreateProfile = () => {
  return (
    <div className="create-profile px-2">
       <div className="header my-2">
       <h3>Create Client Profile</h3>
        <p>Add some basic information related to the client.</p>
       </div>
        <div className="row">
            <div className="file-upload d-flex align-items-center justify-content-start56" >
                <div className="box">
                  <AiOutlinePlus/>
                </div>
                <div className="file-content ps-3">
                    <h5>Company Logo</h5>
                    <p>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
                </div>
            </div>
            <div className="form-container pt-3">
            <div class="row">
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Company Name *" aria-label="First name"/>
          </div>
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Website" aria-label="Last name"/>
          </div>
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Select Business Category *" aria-label="Last name"/>
          </div>
          <div class="col-md-6 col-sm-12">
          <select class="form-select" aria-label="Default select example">
  <option selected>Select Facility Management Company *</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
          </select>
          </div>
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Company Email Address *
Input" aria-label="First name"/>
          </div>
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Mobile Number *" aria-label="First name"/>
          </div>
          <div class="col-md-6 col-sm-12">
          <select class="form-select" aria-label="Default select example">
  <option selected>Select State *</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
          </select>
          </div>
          <div class="col-md-4 col-sm-12">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select City *</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div class="col-md-2 col-sm-12">
            <input type="text" class="form-control" placeholder="Pincode *" aria-label="First name"/>
          </div>

          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="GST Number *" aria-label="First name"/>
          </div>
          <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Fax Number" aria-label="First name"/>
          </div>
          </div>
          <div className="btn-container my-3">
          <button type="button" class="btn btn-primary font-weight-bold"> Save & Continue  <FaAngleRight className="ps-2"/> </button>
          <button type="button" class="btn ms-5 "><FaUndoAlt className="me-2" />Reset </button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProfile