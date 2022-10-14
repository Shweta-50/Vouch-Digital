import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { HiOutlineUser,HiOutlineLockClosed} from 'react-icons/hi';
import { BsEye} from 'react-icons/bs';
import "./login.scss";

const Login = () => {
  return (
    <Container fluid>
      <div className="row login-container  align-items-center justify-center">
        <div className="col-md-5 col-sm-12 mx-auto login-left ">
          <div className="login">
           
            <div className="login-right-content  ">
            <div className="login-heading ">
              <h1>Welcome</h1>
              <p>Enter your Username and Passoword.</p>
            </div>
              <Form>
                <InputGroup className="mb-3  ">
                  <InputGroup.Text id="basic-addon1"> <HiOutlineUser/></InputGroup.Text>
                 
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                   type="text"
                    className="input-field"
                  />
                </InputGroup>
                
                <InputGroup className="mb-3 d-flex">
                  <InputGroup.Text id="basic-addon1"><HiOutlineLockClosed/></InputGroup.Text>
                  <Form.Control
                    placeholder="password"
                    aria-label="password"
                    type="password"
                    className="input-password shadow-none"
                  />
                  <InputGroup.Text id="basic-addon1" className="pe-2"><BsEye/></InputGroup.Text>
                </InputGroup>
                <div className="text-center submit-button">
                  <Button  className="btn btn-primary w-100">Login</Button>
                </div>
               
                <p className="mt-2">Forgot password? </p>
              </Form>
            </div>
          </div>
          <div className="login-left-policy text-center mt-5">
            <span>Terms of Use </span>
            <span className="ms-4">Privacy Policy</span>
            <p>© Punctualiti 2022. All rights reserved</p>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 mx-auto login-right order-first order-md-last">
          <div className="container">
            <div className="login-content text-center text-white">
              <img
                src="./images/rect.png"
                alt="login-image"
                className="img-fluid"
              />
              <div className="login-text container w-75">
                <h1>360° Solution for Asset Management</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
