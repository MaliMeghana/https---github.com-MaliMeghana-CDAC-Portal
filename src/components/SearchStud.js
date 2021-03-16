// import React from "react";
import { Form, Button } from "react-bootstrap";

// function SearchStud() {
//   return (
//     <div className='my-3 mr-2 d-flex justify-content-center'>
//       <Form inline>
//         <Form.Label className='mr-2' htmlFor='inlineFormCustomSelectPref'>
//           Search Student
//         </Form.Label>
//         <Form.Control
//           className='mr-2'
//           as='select'
//           id='inlineFormCustomSelectPref'
//           custom
//         >
//           <option>Batch</option>
//           <option value='0'>Feb 20</option>
//           <option value='1'>Sept 20</option>
//           <option value='2'>Feb 21</option>
//         </Form.Control>
//         <Form.Control
//           className='mr-2'
//           as='select'
//           id='inlineFormCustomSelectPref'
//           custom
//         >
//           <option>Select</option>
//           <option value='1'>Name</option>
//           <option value='2'>Id</option>
//         </Form.Control>
//         <Form.Control
//           className='mr-2'
//           id='inlineFormInputName2'
//           placeholder='Name/Id'
//         />

//         <Button className='outline-secondary mr-2' variant='outline-secondary'>
//           Search
//         </Button>
//       </Form>
//     </div>
//   );
// }
// export default SearchStud;


import React, { Component } from 'react';

class SearchStud extends Component {
  render() {
    return (
      <div className='my-3 mr-2 d-flex justify-content-center'>
      <Form inline>
        <Form.Label className='mr-2' htmlFor='inlineFormCustomSelectPref'>
          Search Student
        </Form.Label>
        <Form.Control
          className='mr-2'
          as='select'
          id='inlineFormCustomSelectPref'
          custom
        >
          <option>Batch</option>
          <option value='0'>Feb 20</option>
          <option value='1'>Sept 20</option>
          <option value='2'>Feb 21</option>
        </Form.Control>
        <Form.Control
          className='mr-2'
          as='select'
          id='inlineFormCustomSelectPref'
          custom
        >
          <option>Select</option>
          <option value='1'>Name</option>
          <option value='2'>Id</option>
        </Form.Control>
        <Form.Control
          className='mr-2'
          id='inlineFormInputName2'
          placeholder='Name/Id'
        />

        <Button className='outline-secondary mr-2' variant='outline-secondary'>
          Search
        </Button>
      </Form>
    </div>
    );
  }
}

export default SearchStud;