import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, CreateAccount } from "./Screens";

const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
      <AuthStack.Navigator>
      </AuthStack.Navigator>
    </NavigationContainer>
);