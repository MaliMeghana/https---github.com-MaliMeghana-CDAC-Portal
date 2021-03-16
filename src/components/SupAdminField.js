// import React from "react";
import SearchStud from "./SearchStud";
import { Form, Button } from "react-bootstrap";

// function SupAdminField() {
//   return (
//     <div className="container-fluid">
//       <div className="my-5">
//         <SearchStud />
//       </div>
//       <hr />
//       <div className="container-fluid admin-field-container">
//         <div className="row d-flex justify-content-around">
//           <div className="col-2 p-2 div-border admin-field">
//             <Form>
//               <Form.Group>
//                 <Form.Label className="mr-2">See Rank</Form.Label>
//               </Form.Group>
//               <Form.Control className="my-2" as="select" custom>
//                 <option>Select Batch</option>
//                 <option value="1">Feb 20</option>
//                 <option value="1">Sept 20</option>
//                 <option value="2">Feb 21</option>
//               </Form.Control>

//               <div>
//                 <Form.Control
//                   className="my-2"
//                   as="select"
//                   id="inlineFormCustomSelectPref"
//                   custom
//                 >
//                   <option>Rank</option>
//                   <option value="1">All</option>
//                   <option value="1">Top 10</option>
//                   <option value="1">Top 50</option>
//                 </Form.Control>
//               </div>

//               <div className="text-center  mt-2">
//                 <Button
//                   variant="secondary"
//                   className="button-align"
//                   type="submit"
//                 >
//                   Search
//                 </Button>
//               </div>

//               <hr />
//               <div className="text-center  mt-2">
//                 <Button
//                   variant="secondary"
//                   className="button-align"
//                   type="submit"
//                 >
//                   Student Analysis
//                 </Button>
//               </div>
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
//             <Form>
//               <Form.Group>
//                 <Form.Label className="mr-2 text-center">
//                   Subject Wise
//                 </Form.Label>
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
//               <div>
//                 <Form.Control
//                   className="my-2"
//                   as="select"
//                   id="inlineFormCustomSelectPref"
//                   custom
//                 >
//                   <option>Rank</option>
//                   <option value="1">All</option>
//                   <option value="1">Top 10</option>
//                   <option value="1">Top 50</option>
//                 </Form.Control>
//               </div>

//               <div className="text-center  mt-2">
//                 <Button
//                   variant="secondary"
//                   className="button-align"
//                   type="submit"
//                 >
//                   Search
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SupAdminField;
import React, { Component } from 'react';

class SupAdminField extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="my-5">
        <SearchStud />
      </div>
      <hr />
      <div className="container-fluid admin-field-container">
        <div className="row d-flex justify-content-around">
          <div className="col-2 p-2 div-border admin-field">
            <Form>
              <Form.Group>
                <Form.Label className="mr-2">See Rank</Form.Label>
              </Form.Group>
              <Form.Control className="my-2" as="select" custom>
                <option>Select Batch</option>
                <option value="1">Feb 20</option>
                <option value="1">Sept 20</option>
                <option value="2">Feb 21</option>
              </Form.Control>

              <div>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option>Rank</option>
                  <option value="1">All</option>
                  <option value="1">Top 10</option>
                  <option value="1">Top 50</option>
                </Form.Control>
              </div>

              <div className="text-center  mt-2">
                <Button
                  variant="secondary"
                  className="button-align"
                  type="submit"
                >
                  Search
                </Button>
              </div>

              <hr />
              <div className="text-center  mt-2">
                <Button
                  variant="secondary"
                  className="button-align"
                  type="submit"
                >
                  Student Analysis
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
                  Subject Wise
                </Form.Label>
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
              <div>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                >
                  <option>Rank</option>
                  <option value="1">All</option>
                  <option value="1">Top 10</option>
                  <option value="1">Top 50</option>
                </Form.Control>
              </div>

              <div className="text-center  mt-2">
                <Button
                  variant="secondary"
                  className="button-align"
                  type="submit"
                >
                  Search
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SupAdminField;


