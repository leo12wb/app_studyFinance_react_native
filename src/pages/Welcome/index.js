import React from 'react';
import { StyleSheet, Text, View,
   TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Welcome({navigation}) {
    
    return (
      <View style={styles.container}>
        <View style={styles.contentLogo}>
          <Animatable.Image
            animation="flipInY"
            duration= {1400}
            source={require('../../../assets/logo.png')}
            style={styles.img}
            resizeMode='contain'
          />
        </View> 

        <Animatable.View 
          delay={600}
          animation="fadeInUp"
          style={styles.contentForm}>

          <Text style={styles.title}>
            Monitore, organize seus gastos de
            qualquer lugar!
          </Text>
          <Text style={styles.text}>Faça o Login para começar</Text>


          <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Home')
            } 
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          {/*<TouchableOpacity 
            style={styles.button2}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Grafic')
            } 
          >
            <Text style={styles.buttonText}>Graficos</Text>
          </TouchableOpacity>*/}
        </Animatable.View>
      </View>
    );
}
//navigation.navigate('Home', {name: 'Home'})
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#38A69D'
    },
    contentLogo:{
      flex:2,
      backgroundColor:'#38A69D',
      justifyContent:'center',
      alignItems:'center',
    },
    img:{
      width:'100%',
      height: '50%',
    },
    contentForm:{
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingEnd:'5%',
      paddingStart:'5%'
    },
    title:{
       fontSize: 24,
       fontWeight: 'bold',
       marginTop:28,
       marginBottom:12,
    },
    text:{
      color:'#a1a1a1'
    },
    button:{
      position:'absolute',
      backgroundColor:'#38A69D',
      borderRadius:50,
      paddingVertical:8,
      width:'60%',
      alignSelf:'center',
      //bottom: '28%',
      bottom: '15%',
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText:{
      fontSize:18,
      color: '#fff',
      fontWeight:'bold'
    },
    button2:{
      position:'absolute',
      backgroundColor:'#38A69D',
      borderRadius:50,
      paddingVertical:8,
      width:'60%',
      alignSelf:'center',
      bottom: '10%',
      alignItems:'center',
      justifyContent:'center'
    },
})