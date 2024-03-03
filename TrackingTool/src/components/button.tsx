import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../Network/ApiHook';
type text={title:String,parameter:String, onPressLogin: ()=> void};
const ButtonComponant = (props: text) => {
  
  const{title,parameter,onPressLogin} = props;
  // const onPress =()=>{
  //   loginUser()
  //   navigation.navigate(parameter,{})
  // }
  return (
    
<View >
<TouchableOpacity  style ={styles.button} onPress={onPressLogin}>
        <Text style ={styles.text}>{title}</Text>
      </TouchableOpacity>
</View>
  
  )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#8518FF',
         borderRadius:10,
         marginTop:40,
         alignItems:'center',
         padding:10,
         width:200
    },
    text:{
      fontSize:20,
        fontFamily:'poppins',
        color:'white'
    },
   
    

})
export default ButtonComponant;
