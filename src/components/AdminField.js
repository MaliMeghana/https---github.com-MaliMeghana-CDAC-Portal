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
import DropdownService from "../services/DropdownService";
import AdminService from "../services/AdminService";

class AdminField extends Component {
  constructor(props){
    super(props);
    this.state={
        batchs:[],
        modules:[],
        selectedFile:"",
        moduleId:""
    }
    this.changeModule=this.changeModule.bind(this);
    this.onFileChangeHandler=this.onFileChangeHandler.bind(this);
 
  }
  componentDidMount(){
    DropdownService.getModules().then((res)=>{
       this.setState({modules:res.data});
    });
    DropdownService.getBatchs().then((res)=>{
      this.setState({batchs:res.data});
   });

  }

  changeModule=(e)=>{
    this.setState({moduleId:e.target.value});
  }
  onFileChangeHandler=(e)=>{
    e.preventDefault();
    this.setState({
      selectedFile:e.target.files[0]
    });
    const formData=new FormData();
    formData.append('file',this.state.selectedFile);
    console.log(JSON.stringify(formData));
    AdminService.uploadExcel(formData).then(res=>{
      console.log(res.data);
      alert("File uploaded succesfully");
    })
  }

  // uploadFile=(e)=>{
  //   console.log(this.state.moduleId);
  //   console.log(this.state.file);
  //   AdminService.uploadExcel(this.state.file,this.state.moduleId);
  // }
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
              <Form enctype="multipart/form-data">
                <Form.Group>
                  <Form.Label className="mr-2">Upload Marks</Form.Label>
                </Form.Group>
                <Form.Control className="my-2" as="select" custom>
                  <option name="batchs">Select Batch</option>
                  {
                    this.state.batchs.map(
                     batchs=>
                     <option key={batchs.batchId} value={batchs.batchId}>{batchs.batchMonth}{batchs.batchYear}</option>
                    )
                  }
                  
                  
                </Form.Control>
                <Form.Control
                  className="my-2"
                  as="select"
                  id="inlineFormCustomSelectPref"
                  custom
                  name="modules"
                  onChange={this.changeModule}
                >
                  <option >Select Subject</option>
                  {
                    this.state.modules.map(
                     modules=>
                     <option key={modules.moduleId} value={modules.moduleId} >{modules.moduleName}  </option>
                    )
                  }
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
                 <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
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
                  <option name="batchs">Select Batch</option>
                  {
                    this.state.batchs.map(
                     batchs=>
                     <option key={batchs.batchId} value={batchs.batchId}>{batchs.batchMonth}{batchs.batchYear}</option>
                    )
                  }
                  </Form.Control>
                  <Form.Control
                    className="my-2"
                    as="select"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                   <option name="modules">Select Subject</option>
                  {
                    this.state.modules.map(
                     modules=>
                     <option key={modules.moduleId} value={modules.moduleId}>{modules.moduleName}</option>
                    )
                  }
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
