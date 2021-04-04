import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions,TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item,navigation}) => {
    
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width-20,
        height: height-150,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height-100,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    content:{
        alignItems: "center",
        backgroundColor: "coral",
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
})

export default CarouselItem