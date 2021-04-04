import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';


export default function ProfileAndCharges({navigation}) {
  const gotoupdatepassword = () =>{
    navigation.navigate('UpdatePassword');
  }

  const gotoupdateprofile = () =>{
    navigation.navigate('UpdateProfile');
  }
  const gotoupdatecharges = () =>{
    navigation.navigate('UpdateCharges');
  }

  const gotoaddclinic = () => {
    navigation.navigate('AddClinic');
  };
  const gotodeleteclinic = () => {
    navigation.navigate('DeleteClinic');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Profile and Charges</Text>

      <TouchableOpacity style={styles.content} onPress={gotoupdatepassword}>
        <Text style={styles.txt}> Update Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotoupdateprofile}>
        <Text style={styles.txt}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotoupdatecharges}>
        <Text style={styles.txt}>Update Charges</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotoaddclinic}>
        <Text style={styles.txt}>Add Clinic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={gotodeleteclinic}>
        <Text style={styles.txt}>Delete Clinic</Text>
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