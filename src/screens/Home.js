import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Carousel from '../components/Carousel'
import {dummyData} from './Data'




export default function Home({navigation}){
    const gotoLogin = () => {
        navigation.navigate('Login');
      };
    return (
        <View>
            <Carousel data = {dummyData}/>
            <View >
            <TouchableOpacity style={styles.content} onPress={gotoLogin}>
            <Text style={styles.txt}>Skip</Text>
            </TouchableOpacity>
            </View>
        
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        height:50,
        marginBottom:30,
        marginLeft:20,
        borderRadius:10,
        width:360,
      },
      txt:{
        fontFamily:'verdana',
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        
      },
    });
