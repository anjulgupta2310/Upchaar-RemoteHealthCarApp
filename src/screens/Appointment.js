import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';




 export default function Appointment({navigation}) {
  
  const gotoonlineappointment = () => {
    navigation.navigate('OnlineAppointment');
  };
  const gotophysicalappointment = () => {
    navigation.navigate('PhysicalAppointment');
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Appointment</Text>

      <TouchableOpacity style={styles.content} onPress={gotophysicalappointment}>
        <Text style={styles.txt}>Physical Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotoonlineappointment}>
        <Text style={styles.txt}>Online Apppointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#6F7BD9',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 80,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 5,
  },

  content: {
    alignItems: 'center',
    backgroundColor: '#6F7BD9',
    padding: 10,
    height: 50,
    marginBottom: 30,
    marginLeft: 20,
    borderRadius: 10,
    width: 360,
  },

  txt: {
    fontFamily: 'verdana',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});