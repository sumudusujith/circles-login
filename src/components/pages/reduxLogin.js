
import React, { useState, useEffect } from "react";
import { Box, Button, Flex } from "rebass";

import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import {compose} from 'redux';


import { routesClass } from "../../routesClass";


import { incrementBy, sagalogin, form } from "../../redux/actions";
//import getData from "../../fetch";

const loginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props



  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}


function mapStateToProps(state) {
  return {

  }
}

 //const validations = (values) => {
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      //console.log("submit");
     
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        } else if (values.firstName.length > 15) {
          errors.firstName = "Must be 15 characters or less";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        } else if (values.lastName.length > 15) {
          errors.lastName = "Must be 15 characters or less";
        }
        
        console.log(values);
        console.log("ERR", errors);
        return errors;
     // };
      // function onSubmit(values) {
      //   values.preventDefault();
      //   console.log(values);
      // }
      //   validations(values);
      // }

    }
  }
}
 const withconnect = connect(mapStateToProps, mapDispatchToProps)

export default compose (withconnect,reduxForm({
  form: 'loginForm'  // a unique identifier for this form
}) )(loginForm);
