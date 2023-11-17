import {Splash, SliderScreen, IntroduceYourself} from '../../screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const AuthApp = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <AuthStack.Screen name={'Splash'} component={Splash} />
      <AuthStack.Screen name={'SliderScreen'} component={SliderScreen} />
      <AuthStack.Screen
        name={'IntroduceYourself'}
        component={IntroduceYourself}
      />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
