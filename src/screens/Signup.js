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
// let addItem = (item) => {
//   db.ref('/items').push({
//     license: item,
//     email:  item,
//     phone:  item,
//     name: item,
//     password: item,
//   });
// };
export default class Signup extends Component {
  state = {
    license: '',
    email: '',
    phone: '',
    name: '',
    password: '',
    specialization:'',
    onlineCharges:'',
    offlineCharges:'',
  };
  // componentDidMount(){        //fetching
  //   const myitems= db.ref("items");
  //   myitems.on("value",datasnap=>{
  //     console.log(datasnap.val());
  //   })
  // }
  saveitem(){                //storing
    var key=this.state.license;
    const myitems = db.ref('items');
    myitems.child(key).set({
      email: this.state.email,
      phone: this.state.phone,
      name: this.state.name,
      password: this.state.password,
      specialization: this.state.specialization,
      onlineCharges: this.state.onlineCharges,
      offlineCharges: this.state.offlineCharges,
    });
    Alert.alert('Succesfully Added Data');
     this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.head}>Sign up</Text>
          <Text style={styles.line}>License No.</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.license}
            onChangeText={(license) => this.setState({license})}
          />

          <Text style={styles.line}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />

          <Text style={styles.line}>Phone</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={this.state.phone}
            onChangeText={(phone) => this.setState({phone})}
          />

          <Text style={styles.line}>Name</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
          />

          <Text style={styles.line}>Password</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />

          <Text style={styles.line}>Specialization</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.specialization}
            onChangeText={(specialization) => this.setState({specialization})}
          />

          <Text style={styles.line}>Online Charges</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.onlineCharges}
            onChangeText={(onlineCharges) => this.setState({onlineCharges})}
          />

          <Text style={styles.line}>Offline Charges</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={this.state.offlineCharges}
            onChangeText={(offlineCharges) => this.setState({offlineCharges})}
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
