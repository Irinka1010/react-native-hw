import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
