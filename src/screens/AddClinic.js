import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {db} from '../config';
import {license_id} from './Login';
export default class AddClinic extends Component {
  state = {
    clinic:'',
    address:'',
  };
  saveitem() {
    var key = this.state.clinic;
    const myitems = db.ref('clinic');
    myitems.child(license_id).child(key).set({
      address: this.state.address,
    });
    Alert.alert('Succesfully Clinic Added');
    this.props.navigation.navigate('ProfileAndCharges');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.head}>Add Clinic</Text>
          <Text style={styles.line}>Clinic Name</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.clinic}
            onChangeText={(clinic) => this.setState({clinic})}
          />


          <Text style={styles.line}>Clinic Address</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.address}
            onChangeText={(address) => this.setState({address})}
          />


          <Button title="SUBMIT" onPress={() => this.saveitem()} />
        </ScrollView>
      </SafeAreaView>
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
    width: 400,
    borderRadius: 5,
  },
});
