import React, {useState} from 'react';
import { StyleSheet, Text,
   View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);


    return (
      <TouchableOpacity onPress={ () => setShowValue(!showValue)}
        style={styles.container}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
           <Text style={styles.label}>{data.label}</Text>
           
           { showValue ? (
             <Animatable.Text 
             animation="fadeInRight"
             style={ data.type === 1 ? styles.value : styles.expenses }>
               {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }
             </Animatable.Text>
           ):(
             <View style={styles.skeleton}>

             </View>
           )}
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom:24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#dadada'
    },
    content:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8,
    },
    date: {
      color: '#dadada',
      fontWeight: 'bold'
    },
    label:{
      fontWeight: 'bold',
      fontSize:16,
    },
    value:{
      fontSize:16,
      color: '#2ecc71',
      fontWeight: 'bold'
    },
    expenses:{
      fontSize:16,
      color: '#e74c3c',
      fontWeight: 'bold'
    },
    skeleton:{
      marginTop:6,
      width: 80,
      height: 10,
      backgroundColor: '#dadada',
      borderRadius: 8,
    }

})