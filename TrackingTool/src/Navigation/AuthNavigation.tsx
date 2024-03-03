import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screen/LoginScreen";
import loginScreen from "../Screen/LoginScreen";
import LoginScreen from "../Screen/LoginScreen";
import ForgotScreen from "../Screen/ForgotScreen";
import HomeScreen from "../Screen/HomeScreen";


const StackNav = createNativeStackNavigator();
const AuthStackNavigation =()=> {

    return(
        <StackNav.Navigator>
            <StackNav.Screen
             name="LoginScreen"
             component={LoginScreen}
             options={{headerShown:false,}}
             />
             <StackNav.Screen
             name="ForgotScreen"
             component={ForgotScreen}
             options={{headerShown:false,}}
             />
             
        </StackNav.Navigator>
    )
}
export default AuthStackNavigation;