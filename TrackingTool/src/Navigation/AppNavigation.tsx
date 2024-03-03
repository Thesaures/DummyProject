import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screen/LoginScreen";
import loginScreen from "../Screen/LoginScreen";
import LoginScreen from "../Screen/LoginScreen";
import ForgotScreen from "../Screen/ForgotScreen";
import HomeScreen from "../Screen/HomeScreen";
import Page1 from "../Screen/Page1";
import Page2 from "../Screen/Page2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Page4 from "../Screen/Page4";
import BatchDetailsPage from "../Screen/BatchDetailsPage";
import PageModal from "../Screen/PageModal";
import SingleTraine from "../Screen/SingleTraineePage";
import AssesmentPage from "../Screen/AssessmentPageForTrainee";
import SingleDayCourse from "../Screen/SingleDayCourseScreen";
const BottomNav =createBottomTabNavigator();

const StackNav = createNativeStackNavigator();

const HomeStackNavigation = () =>{
      return(
        <StackNav.Navigator>
            {/* <StackNav.Screen
             name="Home"
             component={BottomNavigation}
             options={{headerShown:false,}}
             /> */}
             
             <StackNav.Screen
             name="Trainee"
             component={SingleTraine}
             options={{headerShown:false,}}
             />
             <StackNav.Screen
             name="Single"
             component={SingleDayCourse}
             options={{headerShown:false,}}
             />
             <StackNav.Screen
             name="TraineAssessment"
             component={AssesmentPage}
             options={{headerShown:false,}}
             />
        </StackNav.Navigator>
      )
}


const BottomNavigation =()=>{
    return(
        <BottomNav.Navigator
        initialRouteName="Feed"
        
      screenOptions={{
        // tabBarActiveTintColor: 'white',
        tabBarStyle:{
            borderTopEndRadius:30,
            borderTopLeftRadius:30,
            backgroundColor:'white',
            height:80
        }
        
      }}>
        <BottomNav.Screen
             name="Modal"
             component={SingleTraine}
             options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  )
                }}
             />
        <BottomNav.Screen
             name="AssesmentPage"
             component={AssesmentPage}
             options={{headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-group" color={color} size={size} />
                  )
                }}
             />
             <BottomNav.Screen
             name="Single"
             component={SingleDayCourse}
             options={{headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="note" color={color} size={size} />
                  )
                }}
             />
             <BottomNav.Screen
             name="Page4"
             component={Page4}
             options={{headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="note" color={color} size={size} />
                  )
                }}
             />

         </BottomNav.Navigator>
    )
}

export default HomeStackNavigation;




