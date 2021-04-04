import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {db} from '../config';
import {license_id} from './Login';
import {len} from './PhysicalAppointment';

export default class PhysicalSchedule extends Component {
  state = {
    name: '',
    preTime: '',
    preDate: '',
    newTime: '',
    newDate: '',
  };

  checkitem() {
    // console.log('In checkIntem');
    var flag = 0;
    for (var i = 1; i <= len; i++) {
      // console.log(i);
      const myitems = db.ref(`Appointment/PhysicalAppointment/${license_id}/${i}`);
      myitems.on('value', (datasnap) => {
        const t = datasnap.val();
        var n = this.state.name;
        var pT = this.state.preTime;
        var pD = this.state.preDate;
        var l = pT.localeCompare(t.time);
        var m = n.localeCompare(t.name);
        var d = pD.localeCompare(t.date);
        if (m == 0 && l == 0 && d == 0) {
          flag = 1;
          myitems.update({
            time: this.state.newTime,
            date: this.state.newDate,
          });
          Alert.alert('Schedule has been succesfully updated');
          this.props.navigation.navigate('UpdateSchedule');
        }
      });
    }
    if (flag == 0) {
      Alert.alert('Invalid data');
    }
    // else{

    // }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.head}>Physical Schedule</Text>

          <View style="styles.content">
            <Text style={styles.line}>Patient Name</Text>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="aman"
              onChangeText={(name) => this.setState({name})}
            />

            <Text style={styles.line}>Previous Time</Text>
            <TextInput
              style={styles.input}
              placeholder="xyz_1998"
              onChangeText={(preTime) => this.setState({preTime})}
            />

            <Text style={styles.line}>Previous Date</Text>
            <TextInput
              style={styles.input}
              placeholder="xyz_1998"
              onChangeText={(preDate) => this.setState({preDate})}
            />

            <Text style={styles.line}>New Time</Text>
            <TextInput
              style={styles.input}
              placeholder="xyz_1998"
              onChangeText={(newTime) => this.setState({newTime})}
            />

            <Text style={styles.line}>New Date</Text>
            <TextInput
              style={styles.input}
              placeholder="xyz_1998"
              onChangeText={(newDate) => this.setState({newDate})}
            />

            <Button
              style={styles.buttonline}
              title="SUBMIT"
              onPress={() => this.checkitem()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
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
    padding: 50,
  },

  buttonline: {
    padding: 20,
    color: 'coral',
  },

  line: {
    fontFamily: 'verdana',
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: 20,
  },
  input: {
    height: 50,
    borderColor: '#6F7BD9',
    borderWidth: 1,
    marginBottom: 30,
  },
});
export {license_id};
