
import React, { useState, useEffect, useHistory } from 'react';
import { Box, Button, Flex } from "rebass";
//import { Dashboard } from "./components/pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//import history from './history'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';


import { routesClass } from "../../routesClass";


import { incrementBy, sagalogin, form, formDashboardAction } from "../../redux/actions";
//import getData from "../../fetch";

const loginForm = (props) => {
  console.log("PROPS", props);
  const { handleSubmit, pristine, reset, submitting } = props
 // const history = useHistory();


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
        <label htmlFor="password">Password</label> <br />
        <Field
          type="password"
          name="password"
          component="input"
          placeholder="Password"
        />
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
//no nee emil pw ,bcz its in  the state
  }
}

//const validations = (values) => {
function mapDispatchToProps(dispatch,ownProps) {
  
  return {
    onSubmit: (values) => {
      //console.log("submit");

      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }
      // else if(values.firstName){
      //   errors.firstName = "Success";

      // }
      else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 15) {
        errors.lastName = "Must be 15 characters or less";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "Must be 4 characters or greater";
      }

      if (values.password && values.firstName && values.lastName) {
        dispatch(formDashboardAction(values.email, values.password, () => {
          ownProps.history.push("/dashboard");
                      //debugger        
        }));
      }
      // if (values)
      //   else console.log("submit");

      console.log(values);
      console.log("Message", errors);
      return errors;
// window.location = `${window.location.origin}/dashboard`;
//const history = useHistory();
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

export default compose(withconnect, reduxForm({
 //validate: validations,
  form: 'loginForm'  // a unique identifier for this form | function declaration would be invalid, if we didn’t specify any name:
}))(loginForm);

// const reduxLogin = reduxForm({
//   form: "loginForm",
// })(loginForm);

// export default reduxLogin;