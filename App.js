import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, persistor} from './src/store';
import {ScrollView, StatusBar, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import SignUp from './src/components/signUp/signUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import signUp from './src/components/signUp/signUp';
import signIn from './src/components/signIn/signIn';

const Stack = createStackNavigator();
const App = () => {
  RNBootSplash.show();
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen
              name="SignIn"
              component={signIn}
              options={{title: 'Sign-In', headerLeft: null}}
            />
            <Stack.Screen
              name="SignUp"
              component={signUp}
              options={{
                title: 'Sign-Up',
                headerTintColor: 'grey',
                headerLeft: null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
