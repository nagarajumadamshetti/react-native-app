import axios from '../../axios';
const signUpAPI = (value) => {
  return axios.post('/api/v1/sign-up/', {
    firstName: value.firstName,
    lastName: value.lastName,
    password: value.password,
    email: value.email,
  });
};
export default signUpAPI;
