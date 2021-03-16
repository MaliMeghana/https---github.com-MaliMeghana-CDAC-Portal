import React, { Component } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class Notice extends Component {
  render() {
    return (
      <div className="container div-border admin-field mt-5 p-3">
        <div className="row">
          <Col md="12">
            <Form>
              <Form.Group>
                <Form.Label className="d-flex justify-content-center">
                  Notice
                </Form.Label>
                <Form.Control cols="80" rows="4" as="textarea"></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                className="next-button p-2"
                variant="secondary"
              >
                Update
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    );
  }
}

export default Notice;
