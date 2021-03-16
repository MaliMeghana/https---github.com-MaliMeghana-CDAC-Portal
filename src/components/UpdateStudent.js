import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Col, Button, InputGroup } from "react-bootstrap";
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faUserGraduate,
  faCity,
  faMapMarked,
  faMapPin,
  faCalendarDay,
  faMailBulk,
  faSchool,
  faUsers,
  faStream,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";

class UpdateStudent extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center p-5">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center mt-4 div-border admin-field">
            <Form style={{ margin: "20px" }}>
              <Form.Row>
                {/*  <Form.Group className="p-2" as={Col} md="4" controlId="validationCustom01">
                      <Form.Label></Form.Label>
                      <Form.Control
                        required
                        type="hidden"
                        placeholder="Student ID"
                        defaultValue=""
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                     <Form.Group className="p-2" as={Col} md="4" controlId="validationCustom01">
                      <Form.Label></Form.Label>
                      <Form.Control
                        required
                        type="hidden"
                        placeholder="Student Roll ID"
                        defaultValue=""
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}
                <Form.Group
                  as={Col}
                  md="4"
                  className="p-2"
                  controlId="validationCustom01"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUserGraduate} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue=""
                      pattern="[A-Za-z\s]{1,40}"
                      required
                      autocomplete="off"
                      title="only characters are allowed"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationStd02"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUserGraduate} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Middle name"
                      defaultValue=""
                      pattern="[A-Za-z\s]{1,40}"
                      required
                      autocomplete="off"
                      title="only characters are allowed"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationStd03"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUserGraduate} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue=""
                      pattern="[A-Za-z\s]{1,40}"
                      required
                      autocomplete="off"
                      title="only characters are allowed"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="6"
                  controlId="validationStd04"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faCalendarDay} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      type="date"
                      placeholder="DOB"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="6"
                  controlId="validationStd05"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faGenderless} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select" custom>
                      <option>Male</option>
                      <option>Female</option>
                      <option>TransGender</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="6"
                  controlId="validationStdEmail"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faMailBulk} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill your Email ID.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="6"
                  controlId="validationStdMobile"
                >
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faMobile} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      aria-describedby="inputGroupPrepend"
                      pattern="[789][0-9]{9}"
                      required
                      autocomplete="off"
                      title="enter valid mobile no"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill your mobile number.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationCustom09"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faCity} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationCustom10"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faMapMarked} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationCustom11"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faMapPin} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationStd06"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faSchool} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select" custom>
                      <option>Select Center</option>
                      <option>CDAC Kharghar</option>
                      <option>CDAC Juhu</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationStd07"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUsers} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select" custom>
                      <option>Select Batch</option>
                      <option>Feb-2020</option>
                      <option>Sep-2020</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="4"
                  controlId="validationStd08"
                >
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faStream} size="1x" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select" custom>
                      <option>Select Course</option>
                      <option>e-DAC</option>
                      <option>PG-DAC</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              {/* <Form.Group className="p-2">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group> */}
              <Button
                type="submit"
                className="next-button p-2"
                variant="secondary"
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default UpdateStudent;
