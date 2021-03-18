import React from "react";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import DropdownService from "../services/DropdownService";
class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state={
       
        modules:[]      
    }
    
 
  }
  componentDidMount(){
    DropdownService.getModules().then((res)=>{
       this.setState({modules:res.data});
    });
   

  }
  render() {
    return (
      <>
        <Container className="p-5">
          <Row>
            <Col md="12">
              <Card className="card1  div-border admin-field">
                <Card.Header>
                  <Card.Title as="h4">Feed-Back Form</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Col md="12">
                      <Form.Group>
                        <Form.Label>Select Module</Form.Label>
                        <Form.Control as="select">
                          <option>Select Subject</option>
                          {
                    this.state.modules.map(
                     modules=>
                     <option key={modules.moduleId} value={modules.moduleId} >{modules.moduleName}  </option>
                    )
                  }
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <div className="m-3 py-2">
                      <Form.Label className="text-center">
                        Pace Of teaching
                      </Form.Label>

                      <div className="d-flex justify-content-around py-2">
                        <Form.Check
                          type="radio"
                          label="Slow"
                          name="radio1"
                          id="Radios11"
                        />
                        <Form.Check
                          type="radio"
                          label="Moderate"
                          name="radio1"
                          id="Radios12"
                          className="mx-2"
                        />
                        <Form.Check
                          type="radio"
                          label="High"
                          name="radio1"
                          id="Radios13"
                          className="mx-2"
                        />
                      </div>
                    </div>

                    <div className="m-3 py-2">
                      <Form.Label>Explanation</Form.Label>{" "}
                      <div className="d-flex justify-content-around py-2">
                        <Form.Check
                          type="radio"
                          label="Excellent"
                          name="radio2"
                          id="Radios21"
                        />
                        <Form.Check
                          type="radio"
                          label="Average"
                          name="radio2"
                          id="Radios22"
                        />
                        <Form.Check
                          type="radio"
                          label="Poor"
                          name="radio2"
                          id="Radios23"
                        />
                      </div>
                    </div>
                    <div className="m-3 py-2">
                      <Form.Label>Doubt Solving</Form.Label>{" "}
                      <div className="d-flex justify-content-around py-2">
                        <Form.Check
                          type="radio"
                          label="Excellent"
                          name="radio3"
                          id="Radios31"
                        />
                        <Form.Check
                          type="radio"
                          label="Average"
                          name="radio3"
                          id="Radios32"
                        />
                        <Form.Check
                          type="radio"
                          label="Poor"
                          name="radio3"
                          id="Radios33"
                        />
                      </div>
                    </div>
                    <div className="m-3 py-2">
                      <Form.Label>Student Interaction</Form.Label>{" "}
                      <div className="d-flex justify-content-around py-2">
                        <Form.Check
                          type="radio"
                          label="Excellent"
                          name="radio4"
                          id="Radios41"
                        />
                        <Form.Check
                          type="radio"
                          label="Average"
                          name="radio4"
                          id="Radios42"
                        />
                        <Form.Check
                          type="radio"
                          label="Poor"
                          name="radio4"
                          id="Radios43"
                        />
                      </div>
                    </div>
                    <div className="m-3 py-2">
                      <Form.Label>Overall</Form.Label>{" "}
                      <div className="d-flex justify-content-around py-2">
                        <Form.Check
                          type="radio"
                          label="Excellent"
                          name="radio5"
                          id="Radios51"
                        />
                        <Form.Check
                          type="radio"
                          label="Average"
                          name="radio5"
                          id="Radios52"
                        />
                        <Form.Check
                          type="radio"
                          label="Poor"
                          name="radio5"
                          id="Radios53"
                        />
                      </div>
                    </div>

                    <Col md="12">
                      <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          cols="80"
                          placeholder="Here can be your comment"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>

                      <Button
                        className="next-button"
                        type="submit"
                        variant="secondary"
                      >
                        Submit
                      </Button>
                    </Col>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Feedback;
