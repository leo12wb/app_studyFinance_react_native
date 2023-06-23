import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Header({name}) {
  
    return (
      <View style={styles.container}>
        <Animatable.View  
          style={styles.content}
          animation="fadeInDown"
          duration= {1000}
        >
          <Animatable.Text 
            animation="fadeInLeft"
            delay= {800}
            style={styles.username}>{name}</Animatable.Text>

          <TouchableOpacity activeOpacity={0.5}
            style={styles.buttonUser}>
            <Feather name="user" size={27} color="#fff"/>
          </TouchableOpacity>
        </Animatable.View>

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#3ec6c1',
      paddingTop: statusBarHeight,
      paddingStart:16,
      paddingEnd:16,
      paddingBottom:44,
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2,
    }
})