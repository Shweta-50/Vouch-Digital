import React from "react";
import Form from "react-bootstrap/Form";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUndoAlt } from "react-icons/fa";
const Payment = () => {
  return (
    <div className="payment-setup px-2">
      <div className="header my-2">
        <h3>Create Client Profile</h3>
        <p>Add some basic information related to the client.</p>
      </div>
      <div className="row">
        <div className="form-container pt-3">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Company Name *"
                aria-label="First name"
              />
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
              <input
                type="text"
                class="form-control"
                placeholder="Pincode *"
                aria-label="First name"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <select class="form-select" aria-label="Default select example">
                <option selected>Select State *</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="GST Number *"
                aria-label="First name"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Fax Number"
                aria-label="First name"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Fax Number"
                aria-label="First name"
              />
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 col-sm-12 py-2 payment-options">
                <h5>Payment Mode</h5>
                <div className="mb-3 d-flex ">
                  <Form.Check
                    type="checkbox"
                    className=""
                    id="upi"
                    label="UPI"
                  />
                  <Form.Check
                    type="checkbox"
                    className="ms-4"
                    id="banking"
                    label="Net Banking"
                  />
                  <Form.Check
                    type="checkbox"
                    className="ms-4"
                    id="cash"
                    label="Cash"
                  />
                  <Form.Check
                    type="checkbox"
                    className="ms-4"
                    id="cheque"
                    label="Cheque"
                  />
                  <Form.Check
                    type="checkbox"
                    className="ms-4"
                    id="other"
                    label="Other"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 py-2 payment-options">
                <h5>Payment Status</h5>
                <div className="mb-3 d-flex ">
                  <Form.Check type="radio" id="paid" label="Paid" />
                  <Form.Check
                    type="radio"
                    id="pending"
                    label="Pending"
                    className="ms-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-container  mb-4">
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
    </div>
  );
};

export default Payment;
