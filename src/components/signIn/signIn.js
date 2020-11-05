import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const signIn = ({navigation}) => {
  return (
    <View>
      <Text>hello</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']}>
          <Text>Sign-up </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default signIn;
