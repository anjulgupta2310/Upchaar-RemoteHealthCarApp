import React,{Component} from 'react';
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
import {license_id} from './Login'

export default class UpdatePassword extends Component {
  state = {
    old: '',
    newp: '',
    confirm: '',
  };

  updateitem() {
    // var k = this.state.license;
    const myitems = db.ref(`items/${license_id}`);
    myitems.on('value',(datasnap)=>{
      const t = datasnap.val();
      var p = this.state.old;
      var flag = 0;
      var m = p.localeCompare(t.password);
      if (m == 0) 
      {
        if(this.state.newp === this.state.confirm)
        {
          flag = 1;
          myitems.update({
            password: this.state.newp,
          });
          Alert.alert('Succesfully  Password Updated');
          this.props.navigation.navigate('ProfileAndCharges');
        }
        else
        {
          Alert.alert('Invalid New or Confirm Password');
        }
        
      }
      
      if (flag === 0) 
      {
        Alert.alert('Invalid Old Password');
      }
    })
    
    
    
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.head}>Update Password</Text>
          <Text style={styles.line}>Enter Old Password</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.old}
            secureTextEntry={true}
            onChangeText={(old) => this.setState({old})}
          />

          <Text style={styles.line}>Enter new Password</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.newp}
            secureTextEntry={true}
            onChangeText={(newp) => this.setState({newp})}
          />

          <Text style={styles.line}>Confirm new Password</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.confirm}
            secureTextEntry={true}
            onChangeText={(confirm) => this.setState({confirm})}
          />

          <Button title="SUBMIT" onPress={() => this.updateitem()} />
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
