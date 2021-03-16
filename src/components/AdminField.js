// import React from "react";
import SearchStud from "./SearchStud";
import { Form, Button } from "react-bootstrap";

// function AdminField() {
//   return (
//     <div>
//       <div className="my-5">
//         <SearchStud />
//       </div>
//       <hr />
//       <div className="container-fluid admin-field-container">
//         <div className="row d-flex justify-content-around">
//           <div className="col-2 p-2 div-border admin-field">
//             <Form>
//               <Form.Group>
//                 <Form.Label className="mr-2">Upload Marks</Form.Label>
//               </Form.Group>
//               <Form.Control className="my-2" as="select" custom>
//                 <option>Select Batch</option>
//                 <option value="1">Feb 20</option>
//                 <option value="1">Sept 20</option>
//                 <option value="2">Feb 21</option>
//               </Form.Control>
//               <Form.Control
//                 className="my-2"
//                 as="select"
//                 id="inlineFormCustomSelectPref"
//                 custom
//               >
//                 <option>Select Subject</option>
//                 <option value="1">Basic Fundamentals</option>
//                 <option value="2">Operating systems</option>
//                 <option value="3">Core Java</option>
//                 <option value="4">Data Structure</option>
//                 <option value="5">Database</option>
//                 <option value="6">Software Engineering</option>
//                 <option value="7">Web Technology</option>
//                 <option value="8">Advance Java</option>
//               </Form.Control>
//               <Form.Control
//                 className="my-2"
//                 as="select"
//                 id="inlineFormCustomSelectPref"
//                 custom
//               >
//                 <option>Exam Type</option>
//                 <option value="1">MCQ</option>
//                 <option value="1">Lab</option>
//               </Form.Control>
//               <Form.Group>
//                 <Form.File id="exampleFormControlFile1" label="Select File" />
//               </Form.Group>
//               <Button variant="secondary" type="submit">
//                 Upload
//               </Button>
//             </Form>
//           </div>
//           <div className="col-7 div-border admin-field admin-field-middle">
//             <div>2</div>
//             <div className="export">
//               <Button className="export-button" variant="secondary">
//                 Export
//               </Button>
//             </div>
//           </div>
//           <div className="col-2 div-border px-2 admin-field">
//             <div>
//               <Button variant="secondary notice" type="button">
//                 Notice
//               </Button>

//               <hr />
//             </div>
//             <div>
//               <Form className="">
//                 <Form.Group>
//                   <Form.Label className="mr-2">Upload Marks</Form.Label>
//                 </Form.Group>
//                 <Form.Control className="my-2" as="select" custom>
//                   <option>Select Batch</option>
//                   <option value="1">Feb 20</option>
//                   <option value="1">Sept 20</option>
//                   <option value="2">Feb 21</option>
//                 </Form.Control>
//                 <Form.Control
//                   className="my-2"
//                   as="select"
//                   id="inlineFormCustomSelectPref"
//                   custom
//                 >
//                   <option>Select Subject</option>
//                   <option value="1">Basic Fundamentals</option>
//                   <option value="2">Operating systems</option>
//                   <option value="3">Core Java</option>
//                   <option value="4">Data Structure</option>
//                   <option value="5">Database</option>
//                   <option value="6">Software Engineering</option>
//                   <option value="7">Web Technology</option>
//                   <option value="8">Advance Java</option>
//                 </Form.Control>
//                 <Button
//                   variant="secondary"
//                   className="button-align"
//                   type="submit"
//                 >
//                   View
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div>
//         <div>
//           <Button href="/admin" className="next-button" variant="secondary">
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminField;
import React, { Component } from "react";

class AdminField extends Component {
  render() {
    return (
      <div>
        <div className="my-5">
          <SearchStud />
        </div>
        <hr />
        <div className="container-fluid admin-field-container">
          <div className="row d-flex justify-content-around">
            <div className="col-2 p-2 div-border admin-field">
              <Form>
                <Form.Group>
                  <Form.Label className="mr-2">Upload Marks</Form.Label>
                </Form.Group>
                <Form.Control className="my-2" as="select" custom>
                  <option>Select Batch</option>
                  <option value="1">Feb 20</option>
                  <option value="1">Sept 20</option>
                  <option value="2">Feb 21</option>
                </Form.Control>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option>Select Subject</option>
                  <option value="1">Basic Fundamentals</option>
                  <option value="2">Operating systems</option>
                  <option value="3">Core Java</option>
                  <option value="4">Data Structure</option>
                  <option value="5">Database</option>
                  <option value="6">Software Engineering</option>
                  <option value="7">Web Technology</option>
                  <option value="8">Advance Java</option>
                </Form.Control>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option>Exam Type</option>
                  <option value="1">MCQ</option>
                  <option value="1">Lab</option>
                </Form.Control>
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" label="Select File" />
                </Form.Group>
                <Button
                  className="my-2 text-center"
                  variant="secondary"
                  type="submit"
                >
                  Upload
                </Button>
              </Form>
            </div>
            <div className="col-7 div-border admin-field admin-field-middle">
              <div>2</div>
              <div className="export">
                <Button className="export-button" variant="secondary">
                  Export
                </Button>
              </div>
            </div>
            <div className="col-2 div-border px-2 admin-field">
              <div>
                <Button href="/notice" variant="secondary notice" type="button">
                  Notice
                </Button>

                <hr />
              </div>
              <div>
                <Form className="">
                  <Form.Group>
                    <Form.Label className="mr-2">Upload Marks</Form.Label>
                  </Form.Group>
                  <Form.Control className="my-2" as="select" custom>
                    <option>Select Batch</option>
                    <option value="1">Feb 20</option>
                    <option value="1">Sept 20</option>
                    <option value="2">Feb 21</option>
                  </Form.Control>
                  <Form.Control
                    className="my-2"
                    as="select"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option>Select Subject</option>
                    <option value="1">Basic Fundamentals</option>
                    <option value="2">Operating systems</option>
                    <option value="3">Core Java</option>
                    <option value="4">Data Structure</option>
                    <option value="5">Database</option>
                    <option value="6">Software Engineering</option>
                    <option value="7">Web Technology</option>
                    <option value="8">Advance Java</option>
                  </Form.Control>
                  <Button
                    variant="secondary"
                    className="button-align"
                    type="submit"
                  >
                    View
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <Button
              href="/adminnext"
              className="next-button"
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminField;
