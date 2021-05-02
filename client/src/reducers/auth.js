import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null , isAuth: false }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null , isAuth : true };
    case actionType.UPDATE:
      const user = localStorage.getItem('profile');
      return user.result._id === action.payload._id ? action.payload : user;

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
