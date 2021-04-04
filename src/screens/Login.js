import React from 'react';
import {db} from '../config';
import { StyleSheet,TextInput,TouchableOpacity,Image,Dimensions, Text, View, ImageBackground, Button,Alert } from 'react-native';
const { width, height } = Dimensions.get('window')

var license_id=0;
export default class Login extends React.Component {
  state = {
    license: '',
    password: '',
  };
  checkitem() {
    var key = this.state.license;
    console.log("In Checkitems");
    const myitems = db.ref(`items/${key}`);
    myitems.on('value', (datasnap) => {
      const t = datasnap.val();
      var p = this.state.password;
      var flag = 0;
      var m = p.localeCompare(t.password);
      if (m == 0) {
        flag = 1;
        license_id = this.state.license;
        var l = 1;
        const emer = db.ref(`Emergency/${l}`);
        emer.on('value', (data) => {
          if (data.val()) {
            Alert.alert('Emergency Appointment');
          }
        });
        this.props.navigation.navigate('Portal');
      }
      if (flag == 0) {
        Alert.alert('Invalid data');
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgi}
          Source={{uri: 'https://reactjs.org/logo-og.png'}}>
          <View style={styles.cardView}>
            <Image
              style={styles.image}
              source={{uri: 'https://i.ibb.co/gbY4G2q/upchaar-logo.png'}}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="License."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({license: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>

          <Button
            style={styles.loginBtn}
            title="Login"
            onPress={() => this.checkitem()}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup1')}>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
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
    color:"black",
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
}
});
export{license_id};