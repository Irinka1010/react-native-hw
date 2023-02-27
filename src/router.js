import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const imgeLogout = require('./assets/log-out.png');

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import PostsScreen from './Screens/mainScreens/PostsScreen';
import CreatePostsScreen from './Screens/mainScreens/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreens/ProfileScreen';

export const useRoute = isAuth => {
  if (!isAuth) {
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
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="post"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="ios-grid-outline" size={size} color={color} />
          ),
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerRight: ({ focused, size, color }) => (
            <Image source={imgeLogout} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <Tab.Screen
        name="create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircleo" size={size} color={color} />
          ),
          title: 'Создать публикацию',
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
