import React from 'react';
import {db} from '../config';
import { StyleSheet,TextInput,TouchableOpacity,Image,Dimensions, Text, View, ImageBackground, Button,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')

export default class Signup1 extends React.Component {
  state = {
    license: '',
    email: '',
    phone: '',
    name: '',
    password: '',
    specialization: '',
    onlineCharges: '',
    offlineCharges: '',
  };
  saveitem() {
    //storing
    var key = this.state.license;
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
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.bgi}
            Source={{uri: 'https://reactjs.org/logo-og.png'}}>
            <View style={styles.inputView}>
              <Text style={styles.head}>License no:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="License no."
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({license: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Email address:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Email address"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({email: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Phone:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Phone"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({phone: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Name:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({name: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Password:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="aman@1432"
                secureTextEntry={true}
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Specialization:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="heart specialist"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({specialization: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Online Charges:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="500"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({onlineCharges: text})}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.head}>Offline Charges:</Text>
              <TextInput
                style={styles.inputText}
                placeholder="1000"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({offlineCharges: text})}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
            <Button
              style={styles.loginBtn}
              title="Signup"
              onPress={() => this.saveitem()}
            />
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    
  },
  inputText:{
    height:50,
    color:"black",
    borderColor:'black',
    borderWidth:1,
    borderRadius:15,
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"blue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  cardView: {
    width: width/2.5,
    height: height/4,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
},
image: {
  width: width/2.5,
  height: height/4,
  borderRadius: 10
},
bgi :{
  width:'100%',
  height: '100%',
  justifyContent: "center",
  alignItems:'center',
  resizeMode: "cover",
  borderRadius: 10
},
input: {
    height: 50,
    borderColor: 'coral',
    borderWidth: 1,
    marginBottom: 30,
    width: 400,
    borderRadius: 5,
  },
});