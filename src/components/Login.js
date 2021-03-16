import React, { Component } from "react";
import "./login.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      //   <div className="container div-border admin-field mt-5 p-3">
      //     <div className="row">
      //       <Col md="12">
      //         <Form>
      //           <Form.Group controlId="formBasicEmail">
      //             <Form.Label>Username</Form.Label>
      //             <Form.Control type="text" placeholder="Enter email" />
      //           </Form.Group>

      //           <Form.Group controlId="formBasicPassword">
      //             <Form.Label>Password</Form.Label>
      //             <Form.Control type="password" placeholder="Password" />
      //           </Form.Group>
      //           <Button
      //             type="submit"
      //             className="next-button p-2"
      //             variant="primary"
      //           >
      //             Login
      //           </Button>
      //         </Form>
      //       </Col>
      //     </div>
      //   </div>

      <div className="container">
        <div className="login-form" id="login-form">
          <div className="login-data">
            <Form>
              <h3 className="form-heading">Login</h3>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select">
                  <option>Student</option>
                  <option>Admin</option>
                  <option>SuperAdmin</option>
                </Form.Control>
              </Form.Group>

              <Button className="mt-3" variant="secondary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
