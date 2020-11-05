export const onFirstNameChangeAction = (value) => {
  return {
    type: 'FIRSTNAMECHANGE',
    payload: value,
  };
};

export const onLastNameChangeAction = (value) => {
  return {
    type: 'LASTNAMECHANGE',
    payload: value,
  };
};

export const onEmailChangeAction = (value) => {
  return {
    type: 'SIGNUPEMAILCHANGE',
    payload: value,
  };
};

export const onPasswordChangeAction = (value) => {
  return {
    type: 'SIGNUPPASSWORDCHANGE',
    payload: value,
  };
};

export const onConfirmPasswordChangeAction = (value) => {
  return {
    type: 'SIGNUPCONFIRMPASSWORDCHANGE',
    payload: value,
  };
};

export const onSubmitSignUpAction = (data) => {
  return {
    type: 'SUBMITSIGNUP',
    payload: data,
  };
};

export const setUserNameAction = (value) => {
  return {
    type: 'SETUSERNAME',
    payload: value,
  };
};

export const setUserUserNameAction = (value) => {
  return {
    type: 'SETUSERUSERNAME',
    payload: value,
  };
};
