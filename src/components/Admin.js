// import React from "react";
import SearchStud from "./SearchStud";
import { Form, Button } from "react-bootstrap";

// function Admin() {
//   return (
//     <div className="container-fluid admin-field-container">
//       <div className="row d-flex justify-content-around">
//         <div className="col-2 p-2 div-border admin-field">
//           <Form>
//             <Form.Group>
//               <Form.Label className="mr-2">Generate Rank</Form.Label>
//             </Form.Group>
//             <Form.Control className="my-2" as="select" custom>
//               <option>Select Batch</option>
//               <option value="1">Feb 20</option>
//               <option value="1">Sept 20</option>
//               <option value="2">Feb 21</option>
//             </Form.Control>

//             <div className="text-center  mt-2">
//               <Button
//                 variant="secondary"
//                 className="button-align"
//                 type="submit"
//               >
//                 Generate
//               </Button>
//             </div>
//           </Form>
//         </div>
//         <div className="col-7 div-border admin-field admin-field-middle">
//           <div>2</div>
//           <div className="export">
//             <Button className="export-button" variant="secondary">
//               Export
//             </Button>
//           </div>
//         </div>
//         <div className="col-2 div-border px-2 admin-field">
//           <Form>
//             <Form.Group>
//               <Form.Label className="mr-2 text-center">
//                 Generate Total Result
//               </Form.Label>
//             </Form.Group>
//             <Form.Control className="my-2" as="select" custom>
//               <option>Select Batch</option>
//               <option value="1">Feb 20</option>
//               <option value="1">Sept 20</option>
//               <option value="2">Feb 21</option>
//             </Form.Control>

//             <div className="text-center  mt-2">
//               <Button
//                 variant="secondary"
//                 className="button-align"
//                 type="submit"
//               >
//                 View
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;
//Meghana
import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
    <div className="container-fluid admin-field-container">
      <div className="row d-flex justify-content-around">
        <div className="col-2 p-2 div-border admin-field">
          <Form>
            <Form.Group>
              <Form.Label className="mr-2">Generate Rank</Form.Label>
            </Form.Group>
            <Form.Control className="my-2" as="select" custom>
              <option>Select Batch</option>
              <option value="1">Feb 20</option>
              <option value="1">Sept 20</option>
              <option value="2">Feb 21</option>
            </Form.Control>

            <div className="text-center  mt-2">
              <Button
                variant="secondary"
                className="button-align"
                type="submit"
              >
                Generate
              </Button>
            </div>
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
          <Form>
            <Form.Group>
              <Form.Label className="mr-2 text-center">
                Generate Total Result
              </Form.Label>
            </Form.Group>
            <Form.Control className="my-2" as="select" custom>
              <option>Select Batch</option>
              <option value="1">Feb 20</option>
              <option value="1">Sept 20</option>
              <option value="2">Feb 21</option>
            </Form.Control>

            <div className="text-center  mt-2">
              <Button
                variant="secondary"
                className="button-align"
                type="submit"
              >
                View
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    );
  }
}

export default Admin;


