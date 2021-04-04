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

export default class UpdateProfile extends Component {
  state = {
    eml: '',
    phn: '',
  };

  updateitem() {
    // var k=this.state.license
    const myitems = db.ref(`items/${license_id}`);
    if(this.state.eml!="" && this.state.phn === "")
    {
      myitems.update({
        email: this.state.eml,
      });
    }
    else if (this.state.eml === "" && this.state.phn != "") {
      myitems.update({
        phone: this.state.phn,
      });
    }
    else
    {
      myitems.update({
        email: this.state.eml,
        phone: this.state.phn,
      });
    }
    
    Alert.alert('Succesfully  Data Updated');
    this.props.navigation.navigate('ProfileAndCharges');
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Update Profile</Text>

        <Text style={styles.line}>Enter new email-id</Text>
        <TextInput
          keyboardType="default"
          placeholder="Shubham@234@gmail.com"
          style={styles.input}
          value={this.state.email}
          onChangeText={(eml) => this.setState({eml})}
        />

        <Text style={styles.line}>Enter new Phone no.</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="8875987821"
          style={styles.input}
          value={this.state.phone}
          onChangeText={(phn) => this.setState({phn})}
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
