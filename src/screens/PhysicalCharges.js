import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import {db} from '../config';
import {license_id} from './Login';

export default class PhysicalCharges extends Component {
  state = {
    charges: '',
  };

  updateitem() {
    // var k=this.state.license
    const myitems = db.ref(`items/${license_id}`);
    myitems.update({
      offlineCharges: this.state.charges,
    });
    Alert.alert('Succesfully  Physical Charges Updated');
    this.props.navigation.navigate('ProfileAndCharges');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Physical Charges</Text>

        <Text style={styles.line}>Current Charges</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Rs. 800"
          style={styles.input}
          onChangeText={(charges) => this.setState({charges})}
        />

        <Button title="SUBMIT" onPress={() => this.updateitem()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#6F7BD9',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 150,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
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
