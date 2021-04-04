import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';


 export default function Portal({navigation}) {

  const gotoappointment = () =>{
    navigation.navigate('Appointment');
  }

  const gotoschedule = () =>{
    navigation.navigate('UpdateSchedule');
  }
  const gotoprofileandcharges = () =>{
    navigation.navigate('ProfileAndCharges');
  }
  const gotoePatient = () => {
    navigation.navigate('ePatient');
  };

  const gotoemergency = () => {
    navigation.navigate('Emergency');
  };
  return (
     <View style={styles.container}>
         <Text style={styles.head}>Doctor's Portal</Text>

            <TouchableOpacity style={styles.content} onPress={gotoappointment}>
                <Text style={styles.txt}>Appointment</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.content} onPress={gotoePatient}>
                <Text style={styles.txt}>E-Patient</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.content} onPress={gotoschedule}>
                <Text style={styles.txt}>Update Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.content} onPress={gotoemergency}>
                <Text style={styles.txt}>Emergency Appointment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.content} onPress={gotoprofileandcharges}>
                <Text style={styles.txt}>Profile and Charges</Text>
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