import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Home';

const AuthStack = createStackNavigator();

export default function AuthStacksComponent() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        option={{title: 'Welcome!'}}
      />
      <AuthStack.Screen
        name="Signin"
        component={SignIn}
        option={{title: 'Sign In!'}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUp}
        option={{title: 'Sign Up!'}}
      />
    </AuthStack.Navigator>
  );
}
