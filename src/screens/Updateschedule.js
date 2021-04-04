import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Appointment({navigation}) {
  const gotoonlineschedule = () => {
    navigation.navigate('OnlineSchedule');
  };

  const gotophysicalschedule = () => {
    navigation.navigate('PhysicalSchedule');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Update Schedule</Text>

      <TouchableOpacity style={styles.content} onPress={gotophysicalschedule}>
        <Text style={styles.txt}>Physical Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotoonlineschedule}>
        <Text style={styles.txt}>Online Schedule</Text>
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
