import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';

import ProfileScreen from './Screens/mainScreens/ProfileScreen';
import Home from './Screens/mainScreens/Home';
import CommentsScreen from './Screens/mainScreens/CommentsScreen.jsx';
import MapScreen from './Screens/mainScreens/MapScreen';
export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Comment"
        component={CommentsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
    </MainStack.Navigator>
  );
};
