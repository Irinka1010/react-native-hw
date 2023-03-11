import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import CreatePostsScreen from './CreatePostsScreen';

const imgeLogout = require('../../assets/log-out.png');
const Tab = createBottomTabNavigator();
export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { height: 88 },
        headerShadowVisible: {
          backgroundColor: '#FFFFFF',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 27.18,
        },
        headerTitleStyle: {
          marginBottom: 11,
          fontSize: 17,
          lineHeight: 22,
          color: '#212121',
        },
        headerRightContainerStyle: { paddingRight: 16, paddingBottom: 9 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 9 },

        tabBarShowLabel: false,
        // tabBarActiveTintColor: '#FF6C00',
        tabBarStyle: {
          height: 83,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="ios-grid-outline"
              color="rgba(33, 33, 33, 0.8)"
              size={size}
            />
          ),
          title: 'Публикации',

          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Image source={imgeLogout} style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused, size, color, style }) => (
            <AntDesign
              name="plus"
              size={size}
              color="#FFFFFF"
              style={{
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 28,
                paddingRight: 28,

                backgroundColor: '#FF6C00',
                borderRadius: 20,
              }}
            />
          ),
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <MaterialIcons
                name="arrow-back"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name={focused ? 'plus' : 'user'}
              size={size}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
