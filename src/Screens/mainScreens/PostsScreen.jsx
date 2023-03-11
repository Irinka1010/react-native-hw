import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
const imgeAvatar = require('../../assets/user.png');

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.boxUser}>
        <Image source={imgeAvatar} style={styles.avatar} alt={'user'} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.nameUser}>Natali Romanova</Text>
          <Text style={styles.emailUser}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E5E5E5',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  boxUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  nameUser: {
    fontSize: 13,
    color: '#212121',
    fontFamily: 'Roboto-Bold',
  },
  emailUser: {
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'Roboto-Regular',
  },
});
