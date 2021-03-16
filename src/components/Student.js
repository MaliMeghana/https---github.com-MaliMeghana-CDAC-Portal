import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Student extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <div>
          <div className="container-fluid">
            {/* <div
              className="row"
              style={{ height: "50px", border: "1px solid" }}
            >
              <div className="col-md-2 "></div>
              <div className="col-md-6"></div>
              <div className="col-md-4">
                <button
                  className="btn btn-primary btn-sm mt-2"
                  style={{ marginLeft: "95px" }}
                >
                  Hi.name
                </button>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  style={{ marginLeft: "140px" }}
                >
                  Logout
                </button>
              </div>
            </div> */}

            <div className="row">
              <div className="col-md-12 mb-3 d-flex justify-content-center align-items-center">
                <p style={{ fontSize: "25px" }}>
                  <b>Thought: </b> Diamonds are formed under pressure,but never
                  forget they are not formed overnight
                </p>
              </div>
            </div>

            <hr />
          </div>
        </div>

        <div className="container-fluid admin-field-container mb-5">
          <div className="row d-flex justify-content-around">
            <div className="col-3 div-border admin-field p-3">
              <div className="d-flex justify-content-center p-2 my-2 div-border">
                <h4>Star performer and marks</h4>
              </div>
              <Form>
                <Form.Group>
                  <Form.Label>You are on Step No</Form.Label>
                  <input type="text" className="form-control" id="1" />
                  <Form.Label>Aptitude Marks</Form.Label>
                  <input type="text" className="form-control" id="1" />
                </Form.Group>
              </Form>
            </div>

            <div className="col-3 admin-field div-border py-3">
              <div>
                <Form>
                  <Form.Group>
                    <Form.Label>Student Name</Form.Label>
                    <input type="text" className="form-control" id="1" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Student Rollno</Form.Label>
                    <input type="text" className="form-control" id="1" />
                  </Form.Group>
                  <Form.Control className="my-2" as="select" custom>
                    <option>Select Subject</option>
                    <option value="1">Basic Fundamentals</option>
                    <option value="2">Operating Systems</option>
                    <option value="3">Core Java</option>
                    <option value="4">Data Structure</option>
                    <option value="5">Database</option>
                    <option value="6">Software Engineering</option>
                    <option value="7">Web Technology</option>
                    <option value="8">Advance Java</option>
                  </Form.Control>
                  <Form.Group>
                    <Form.Label>Subject Marks</Form.Label>
                    <input type="text" className="form-control" id="1" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Subject Rank</Form.Label>
                    <input type="number" className="form-control" id="1" />
                  </Form.Group>
                </Form>
              </div>
            </div>

            <div className="col-3 div-border admin-field">
              <div>
                <Button
                  href="/feedback"
                  className="notice-button"
                  variant="danger notice"
                >
                  Graph
                </Button>
              </div>
              <div>
                <Button
                  href="/feedback"
                  className="notice-button"
                  variant="danger notice"
                >
                  Feedback
                </Button>
                {/* <button
                  href="/feedback"
                  type="button"
                  class="bg-danger text-light mb-2"
                >
                  
                </button> */}
              </div>

              <div className="bg-secondary h-50 d-flex justify-content-center align-items-center text-light">
                <p> Notice</p>
              </div>

              <Button
                href="/updateStudent"
                className="next-button w-100"
                variant="primary"
              >
                Update Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
