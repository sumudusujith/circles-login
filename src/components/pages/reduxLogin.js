import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';

import { formDashboardAction, getconfigAction } from "../../redux/actions";
import { Header1 } from "../../constants/Header/RebassHeader";

const LoginForm = (props) => {
  console.log("PROPS", props);

  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    configLogin,
    login_SubHeader,
    login_Header,
    isLoading,
    isError,
  } = props;

  useEffect(() => { // to call api
    configLogin();
  }, []);


  return (
    <form onSubmit={handleSubmit}>
      
        {!isLoading ? (
        <Header1
        name={login_Header}
        //name={"Ready to take a challenge?"}
        fontSize="4rem"
        textAlign="center"
        color='vlack'
        fontFamily="Candara"
        mb='2rem'
      />
      ):("  LOADING___  ")}
       {!isLoading ? (
      <Header1
        name={login_SubHeader}
        //name={"Login to pick a Challenge!"}
        fontSize="1rem"
        textAlign="center"
        color='black'
        fontFamily="Verdana"

      />
      ):("   LOADING   ")}
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
const selectlogin_Header = (state) => {
  return state.configValuesReducer.configResponse?.login_Header;
};
const selectlogin_SubHeader = (state) => {
  return state.configValuesReducer.configResponse?.login_SubHeader;
};
const selectisLoading = (state) => {
  return state.configValuesReducer?.isLoading;
};

const mapStateToProps = (state) => {
  return {
    login_Header: selectlogin_Header(state),
    login_SubHeader: selectlogin_SubHeader(state),
    isLoading: selectisLoading(state),
    
  };
};
// const mapStateToProps = (state) => {
//   console.log("state works!", state);
//   return {
//     //no nee emil pw ,bcz its in  the state
//     // email: state.form?.loginForm?.values?.email,
//     //     password: state.form?.loginForm?.values?.password,
//     //loginResponse: state.sagaloginNew?.loginResponse?.status,
//     login_Header: state.configValuesReducer.configResponse?.login_Header,
//     login_SubHeader: state.configValuesReducer.configResponse?.login_SubHeader,
//     isLoading:state.configValuesReducer?.isLoading,
//   };
// };
//const validations = (values) => {
function mapDispatchToProps(dispatch, ownProps) {

  return {
    
    configLogin: (login_Header, login_SubHeader) => {
      dispatch(getconfigAction(login_Header, login_SubHeader, () => {
        console.log("action works!");
      }));
    },
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

        }));
      }
      console.log(values);
      console.log("Message", errors);
      return errors;
    },
  };
};
const withconnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withconnect, reduxForm({
  //validate: validations,
  form: 'LoginForm'  // a unique identifier for this form | function declaration would be invalid, if we didn’t specify any name:
}))(LoginForm);






