import { FIELD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, BEGIN_LOGIN, SIGN_OUT } from '../actions/types';

// Our initial state
const init = { email: '', password: '', confirmPassword: '', error: null, loading: false, user: {} };

// Reducer that handles changes sent by action creator
export default (state = init, action) => {
  switch (action.type) {
    case FIELD_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BEGIN_LOGIN:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, email: '', password: '', confirmPassword: '' };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false, password: '', confirmPassword: '' };
    case SIGN_OUT:
      return init;
    default:
      return state;
  }
};
