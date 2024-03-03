import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonComponant from "../components/button";
import InputComponent from "../components/inputComponent";
import HeadTextComponent from "../components/HeadTextComponent";
import Forgot from "../components/ForgotComponent";
const ForgotScreen =()=>{
    return(
        <View>
            <Image style={styles.image}
            source={require('../Assets/cross.png')} 
            />
            <View style={styles.centered}>
                <HeadTextComponent title={'Forget Password?'} />
                <Text>To initiate the password reset process,</Text>
                <Text> kindly provide your email address </Text>
                <Text>below.</Text>
                <InputComponent title='email' />
                <ButtonComponant title='Submit' parameter='' />
            </View>
            </View>
    )
}
const styles = StyleSheet.create({
    centered:{
        // display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        height:600,
        marginTop:100
        },
        image:{
            height:20,
            width:20,
            margin:10,
            marginLeft:375
        }
})
export default ForgotScreen;
