import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonComponant from "../components/button";
import InputComponent from "../components/inputComponent";
import HeadTextComponent from "../components/HeadTextComponent";
import Forgot from "../components/ForgotComponent";
import { loginUser } from "../Network/ApiHook";
import { useNavigation } from "@react-navigation/native";
import { setStringItem } from "../utils/Utils";
import Constants from "../utils/Constants";
import { userLogin } from "../context/userSlice";
import { useDispatch } from "react-redux";
import { userData } from "../context/userDataSlice";


const LoginScreen =()=>{
    const dispatch= useDispatch();
    const [loginUsername, setEmail] = useState('');
    const [loginPassword, setPassword] = useState('');
    const navigation = useNavigation();
   
    const onPressLogin =async () =>{
        console.log(loginUsername, loginPassword);
        const {success, statusCode, loginResp, errorMessage} = await loginUser({loginUsername,loginPassword});
        console.log(success)
        if (success){
            console.log("entered")
            // setStringItem{Constants.IS_LOGIN,'true'}
            setStringItem(Constants.IS_LOGIN, 'true');
            dispatch(userLogin(true))
            dispatch(userData(loginResp))
            //navigation.navigate('home',{})
        }

    }
    return(
    <View style = {styles.centered}>
        <HeadTextComponent title={'Login'}/>
        <InputComponent title='email' change={(text)=>setEmail(text)}/>
        <InputComponent title='Password' change={(text)=>setPassword(text)}/>
        <Forgot/>
        <ButtonComponant title={'Login'} parameter='home' onPressLogin={onPressLogin}/>
    </View>
    )
}
const styles = StyleSheet.create({
    centered:{
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        height:600,
        marginTop:100
         
    },
    heading:{
        
    }
})
export default LoginScreen;