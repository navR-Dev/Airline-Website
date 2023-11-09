// import React from "react"; 
// import * as Yup from "yup"; 
// import { Formik, Form, Field, ErrorMessage } from "formik"; 
// import { FormGroup, FormControl, Button, FormLabel, FormSelect } from "react-bootstrap"; 


// const FlightBooking = (props) => { 
//     const validationSchema = Yup.object().shape({ 
//         Username: Yup.string().required("Username is required"), 
//         email: Yup.string() 
//         .email("You have enter an invalid email address") 
//         .required("Required"), 
//         Password: Yup.string().required("Password is required"), 
//     }); 
//     console.log(props); 
//     return ( 
//         <div className="form-wrapper"> 

//         <Formik {...props} validationSchema={validationSchema}> 
//             <Form> 
//             <FormGroup> 
//                 <FormLabel for="Username">Username</FormLabel>
//                 <Field name="Username" type="text"
//                     className="form-control" id="Username"/> 
//                 <ErrorMessage 
//                 name="Username"
//                 className="d-block invalid-feedback"
//                 component="span"
//                 /> 
//             </FormGroup> 
//             <Button variant="danger" size="lg"
//                 block="block" type="submit"> 
//                 {props.children} 
//             </Button> 

//             <div>
//             <Button>
//                 From
//             </Button>

//             <Button>
//                 To
//             </Button>
//             </div>
            

//             <div>
//                 <span>
//                     <Button>Students</Button>
//                     <Button>Armed forces</Button>
//                     <Button>Senior citizens</Button>
//                 </span>
//             </div>
//             </Form> 
//         </Formik> 
//         </div> 
//     ); 
//     }; 
    
// export default FlightBooking;

