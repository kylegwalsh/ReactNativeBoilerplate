import firebase from 'firebase';
import { FIELD_CHANGED, LOGIN_SUCCESS,
  LOGIN_FAIL, BEGIN_LOGIN, SIGN_OUT } from './types';

// Called whenever email or password in login form changes and notifies auth reducer
export const fieldChanged = ({ prop, value }) => {
  return {
    type: FIELD_CHANGED,
    payload: {
      prop,
      value
    }
  };
};

// Signs user in
export const signInUser = ({ email, password }) => {
  return (dispatch) => {
    // Dispatch intiially to start loading spinner
    dispatch({
      type: BEGIN_LOGIN
    });


    // Sign a user in with firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        logInSuccess(dispatch, user);
      })
      .catch(() => {
        logInFail(dispatch, 'Invalid email or password');
      });
  };
};

// Create user
export const createUser = ({ email, password }) => {
  return (dispatch) => {
    // Dispatch intially to start loading spinner
    dispatch({
      type: BEGIN_LOGIN
    });

    // Create a user with firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        logInSuccess(dispatch, user);
      })
      .catch(() => {
        logInFail(dispatch, 'Error: Sign up failed');
      });
  };
};

// Called on login success
const logInSuccess = (dispatch, user) => {
  // Dispatch a success message to our auth reducer if successful
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};

// Called on login failure
const logInFail = (dispatch, message) => {
  // Dispatch a fail message to our auth reducer if failed
  dispatch({
    type: LOGIN_FAIL,
    payload: message
  });
};

// Sign user out
export const signOutUser = () => {
  return (dispatch) => {
    // Dispatch intially to start loading spinner
    dispatch({
      type: BEGIN_LOGIN
    });

    // Sign user out
    firebase.auth().signOut();

    // Reset reducer
    dispatch({
      type: SIGN_OUT
    });
  }
};
