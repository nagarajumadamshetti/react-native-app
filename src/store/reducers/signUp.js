import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  confirmPassword: '',
  success: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIRSTNAMECHANGE': {
      state.firstName = action.payload;
      return {
        ...state,
      };
    }

    case 'LASTNAMECHANGE': {
      state.lastName = action.payload;
      return {
        ...state,
      };
    }

    case 'SIGNUPEMAILCHANGE': {
      state.email = action.payload;
      return {
        ...state,
      };
    }

    case 'SIGNUPPASSWORDCHANGE': {
      state.password = action.payload;
      return {
        ...state,
      };
    }

    case 'SIGNUPCONFIRMPASSWORDCHANGE': {
      state.confirmPassword = action.payload;
      return {
        ...state,
      };
    }

    case 'SUBMITSIGNUP': {
      if (action.payload) {
        // const setToken= async (action.payload)=>{
      }
      // AsyncStorage.setItem('token', action.payload.token);
      // localStorage.setItem('token', action.payload.token);
      state.success = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
