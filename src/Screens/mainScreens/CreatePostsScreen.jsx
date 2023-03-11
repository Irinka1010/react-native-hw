import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
const imgePost = require('../../assets/rectangle.png');
const imgeCamera = require('../../assets/camera.png');
const imgeLocation = require('../../assets/map-pin.png');
const initialState = {
  namePicture: '',
  location: '',
};

export default function CreatePostsScreen() {
  const [state, setState] = useState(initialState);

  const onSubmit = () => {
    setState(initialState);

    console.log(state);
  };
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
        <TouchableOpacity style={styles.btCamera} activeOpacity={0.8}>
          <Image source={imgeCamera} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxText}>
        <Text style={styles.text}>Загрузите фото</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder=" Название..."
            textAlign={'left'}
            value={state.namePicture}
            onChangeText={value =>
              setState(prevState => ({ ...prevState, namePicture: value }))
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: `#E8E8E8`,
          }}
        >
          <Image source={imgeLocation} style={styles.iconLocation} />
          <TextInput
            style={{
              ...styles.input,
              borderBottomColor: 'transparent',
              marginTop: 16,
              paddingLeft: 4,
            }}
            placeholder="Местность..."
            textAlign={'left'}
            value={state.location}
            onChangeText={value =>
              setState(prevState => ({ ...prevState, location: value }))
            }
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={onSubmit}
        >
          <Text style={styles.btnTitle}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.btnDelet}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FFFFFF`,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  picture: {
    height: 240,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btCamera: {
    width: 60,
    height: 60,
    borderColor: '#FFFFFF4D',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 50,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    marginTop: 8,
  },
  text: {
    color: '#BDBDBD',
  },
  input: {
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: `#E8E8E8`,
    fontStyle: '500',
    color: `#212121`,
    fontSize: 16,
  },
  btn: {
    backgroundColor: `#F6F6F6`,
    padding: 16,
    borderRadius: 100,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
  btnTitle: {
    color: `#BDBDBD`,
    fontSize: 16,
    fontWeight: '400',
  },
  iconLocation: {
    left: 0,
    top: 8,
  },
  btnDelet: {
    paddingTop: 8,
    width: 70,
    height: 40,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,

    backgroundColor: `#F6F6F6`,
    borderRadius: 20,
  },
});
