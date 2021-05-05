import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null , isAuth: false }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null , isAuth : true };
    case actionType.UPDATEPROFILE:
      const user = localStorage.getItem('profile');
      return updateProfile(action.payload)

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

const updateProfile = (result) => {
  const profile = {
      ...JSON.parse(localStorage.getItem('profile')),
      result:{...result}
  };
  localStorage.setItem('profile', JSON.stringify(profile));
  window.location.reload(true);
  return profile
}

export default authReducer;
