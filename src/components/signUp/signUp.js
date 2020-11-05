import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {} from '../../containers/signUp';
import {
  onFirstNameChangeAction,
  onLastNameChangeAction,
  onPasswordChangeAction,
  onConfirmPasswordChangeAction,
  onEmailChangeAction,
  onSubmitSignUpAction,
} from '../../store/actions/signUpActions';

import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  onSubmitSignUp,
} from '../../containers/signUp';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.signUp.firstName);
  const lastName = useSelector((state) => state.signUp.lastName);
  const password = useSelector((state) => state.signUp.password);
  const confirmPassword = useSelector((state) => state.signUp.confirmPassword);
  const email = useSelector((state) => state.signUp.email);
  // const check_firstNameValid = useSelector(
  //   (state) => state.signUp.firstNameValid,
  // );
  // const check_emailValid = useSelector((state) => state.signUp.emailValid);
  // const check_lastNameValid = useSelector(
  //   (state) => state.signUp.lastNameValid,
  // );
  const [data, setData] = React.useState({
    check_emailValid: false,
    check_firstNameValid: false,
    check_lastNameValid: false,
    check_passwordValid: false,
    check_confirmPasswordValid: false,
    check_textInputChange: false,
    secureTextEntryPassword: true,
    secureTextEntryConfirmPassword: true,
    confirm_secureTextEntry: true,
  });

  const handleFirstNameChange = async (val) => {
    setData({
      ...data,
      check_firstNameValid: await validateFirstName(val),
    });
    dispatch(onFirstNameChangeAction(val));
  };

  const handleLastNameChange = async (val) => {
    setData({
      ...data,
      check_lastNameValid: await validateLastName(val),
    });
    dispatch(onLastNameChangeAction(val));
  };

  const handleEmailChange = async (val) => {
    setData({
      ...data,
      check_emailValid: await validateEmail(val),
    });
    dispatch(onEmailChangeAction(val));
  };

  const handlePasswordChange = async (val) => {
    setData({
      ...data,
      check_passwordValid: await validatePassword(val),
    });
    dispatch(onPasswordChangeAction(val));
  };

  const handleConfirmPasswordChange = async (val) => {
    setData({
      ...data,
      check_confirmPasswordValid: await validateConfirmPassword(val),
    });
    dispatch(onConfirmPasswordChangeAction(val));
  };

  const handleSubmitSignUp = async () => {
    if (data.check_firstNameValid) {
      if (data.check_lastNameValid) {
        if (data.check_emailValid) {
          if (data.check_passwordValid) {
            if (data.check_confirmPasswordValid) {
              if (password === confirmPassword) {
                const res = await onSubmitSignUp({
                  firstName,
                  lastName,
                  email,
                  password,
                  confirmPassword,
                });
                console.log('@@@@@');
                console.log(res);
                console.log('@@@@@');
                if (res) {
                  if (res.success) {
                    await dispatch(onSubmitSignUpAction(res.success));
                    alert('signup successful');
                    return;
                  } else {
                    alert(res.error);
                    return;
                  }
                }
              } else {
                alert(
                  'passwords donot match ' + password + ' ' + confirmPassword,
                );
                return;
              }
            } else {
              alert(
                'confirm password valid : ' + data.check_confirmPasswordValid,
              );
            }
          } else {
            alert(' password valid : ' + data.check_passwordValid);
          }
        } else {
          alert(' email valid : ' + data.check_emailValid);
        }
      } else {
        alert(' lastname valid : ' + data.check_lastNameValid);
      }
    } else {
      alert(' firstName valid : ' + data.check_firstNameValid);
    }
  };

  const updateSecureTextEntryPassword = () => {
    setData({
      ...data,
      secureTextEntryPassword: !data.secureTextEntryPassword,
    });
  };
  const updateSecureTextEntryConfirmPassword = () => {
    setData({
      ...data,
      secureTextEntryConfirmPassword: !data.secureTextEntryConfirmPassword,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="pulse" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>firstname</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder=" enter your first name here"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(value) => handleFirstNameChange(value)}
            />
            {data.check_firstNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="frown" color="red" size={20} />
              </Animatable.View>
            )}
          </View>
          <Text style={styles.text_footer}>lastname</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder=" enter your last name here"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleLastNameChange(val)}
            />
            {data.check_lastNameValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="frown" color="red" size={20} />
              </Animatable.View>
            )}
          </View>

          <Text style={styles.text_footer}>email</Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              placeholder=" enter your email here"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleEmailChange(val)}
            />
            {data.check_emailValid ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="frown" color="red" size={20} />
              </Animatable.View>
            )}
          </View>

          <Text style={styles.text_footer}> Password </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password of length 8"
              secureTextEntry={data.secureTextEntryPassword ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntryPassword}>
              {data.secureTextEntryPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={
                data.secureTextEntryConfirmPassword ? true : false
              }
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntryConfirmPassword}>
              {data.secureTextEntryConfirmPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              {' '}
              By signing up you agree to our .{' '}
            </Text>
            <Text style={styles.color_textPrivate}> Terms of service</Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={styles.color_textPrivate}> Privacy policy</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                handleSubmitSignUp();
              }}>
              <Text style={styles.textSign}>Sign-Up </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.signUp}>
              <Text style={styles.textSign}>Sign-In </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'android' ? 5 : 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    backgroundColor: 'green',
    color: '#01ab9d',
    marginTop: 15,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    backgroundColor: 'green',
    color: '#01ab9d',
    marginTop: 15,
  },
  signInButtonText: {
    color: '#fff',
  },
  textSign: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
