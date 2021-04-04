import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});

export default function Logo({navigation})  { 
  const gotoLogin = () =>{
    navigation.navigate('Login.js');
  }
  return (
      <ImageBackground style={styles.container}>
        
           style={{ width: 250, height: 250 }}
          
           source={require('../../assets/upchaar_logo.png')}
           <TouchableOpacity style={styles.content} onPress={gotoLogin}>
                <Text style={styles.txt}>Start</Text>
            </TouchableOpacity>
        
      </ImageBackground>
    );
  }


