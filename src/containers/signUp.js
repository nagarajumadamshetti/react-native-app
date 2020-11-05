import signUpAPI from '../api/signUp';

export const validateFirstName = async (value) => {
  let success = false;
  if (value.length === 0) {
    return success;
  }
  if (!/^[a-zA-Z]+$/i.test(value)) {
    return success;
  }
  return true;
};
export const validateLastName = async (value) => {
  const success = false;
  if (value.length === 0) {
    return success;
  }
  if (!/^[a-zA-Z]+$/i.test(value)) {
    return success;
  }
  return true;
};
export const validatePassword = async (value) => {
  const success = false;
  if (value.length === 0) {
    return success;
  }
  return true;
};

export const validateConfirmPassword = async (value) => {
  let success = false;
  if (value.length === 0) {
    return success;
  }
  return true;
};

export const validateEmail = async (value) => {
  let success = false;
  if (!value) {
    return success;
  }
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      value,
    )
  ) {
    return success;
  }
  return true;
};

const validatePhone = async (value) => {
  let success = false;
  if (!/^\d{10}$/.test(value)) {
    return success;
  }
  return true;
};
const validateFunction = async (state) => {
  if (!state.firstNameValid) {
    return false;
  }

  if (!state.lastNameValid) {
    return false;
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
    return false;
  }

  if (!/^\d{10}$/.test(state.phone)) {
    return false;
  }

  if (state.userName.length < 4) {
    return false;
  }

  if (state.userName.length > 30) {
    return false;
  }

  if (!/^[A-Z0-9_-]{3,30}$/i.test(state.username)) {
    return false;
  }

  if (!state.password) {
    return false;
  }

  if (state.password.length < 8) {
    return false;
  }

  return true;
};

export const onSubmitSignUp = async (value) => {
  let res='';
  try {
    res = JSON.parse(JSON.stringify(await signUpAPI(value)));
    console.log('####');
    alert(res);
    console.log(res.data);
    console.log('####');
    // if (res.data.success) {
    return res.data;
  } catch (error) {
    console.log('****');
    console.log(error);
    alert(error);
    console.log('*`***');
  }
};

export const setUserName = (value) => {};

export const setUserUserName = (value) => {};
