import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';


export default function UpdateCharges({navigation}) {
      const gotoonlinecharges = () =>{
        navigation.navigate('OnlineCharges');
      }
    
      const gotophysicalcharges = () =>{
        navigation.navigate('PhysicalCharges');
      }
  return (
    <View style={styles.container}>
         <Text style={styles.head}>Update Charges</Text>

              <TouchableOpacity style={styles.content} onPress={gotoonlinecharges}>
                <Text style={styles.txt}>Online Charges</Text>
              </TouchableOpacity>
 
              
              <TouchableOpacity style={styles.content} onPress={gotophysicalcharges}>
                <Text style={styles.txt}>Physical Charges</Text>
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
    marginBottom: 150,
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
