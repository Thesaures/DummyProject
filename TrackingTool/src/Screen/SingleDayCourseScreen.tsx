import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from '../components/TraineeAssesmentCard'
import SingleCourseCard from "../components/CardForSingleCourse";
import { assesmentList } from "../Network/ApiHook3";
import { useEffect, useState } from "react";
import { dayWiseCourses } from "../Network/ApiHook5";
import DayCard from "../components/OneDayCard";
import { useRoute } from "@react-navigation/native";

const SingleDayCourse =()=>{
    const route:any = useRoute();
    const value = route.params.number;
    console.log(value)
    const [feedList, setStoryList] = useState<any>([]);
    useEffect(() => {
        console.log('effect activated');
        const getStory = async () => {
          try {
            const {loginResp, errorMessage} = await dayWiseCourses(value)
            console.log(loginResp);
            setStoryList(loginResp);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getStory();
    }, []);


    return(
        
        <View style={styles.container}>
            <View style={styles.total} >
            <Text style={styles.welcome}>Day 1</Text>    
            </View>
            
            <View style ={styles.body}> 
             
             <View style ={styles.first}>
             <Text style ={styles.viewFirst}>Learning Courses</Text>
             <FlatList
            
                data={feedList}
                renderItem={({item}) =>  <SingleCourseCard  courseName={item.course_name}/>}
                />
               
               
            </View>
            </View>
            
        </View>
        
    )
    }
const styles = StyleSheet.create({
      container:{
        height:'100%',
        backgroundColor:'#8518FF'
      },
      body:{
        height:'100%',
        backgroundColor:'white',
        borderTopEndRadius:50,
        borderTopLeftRadius:50,
        marginTop:35,
        //  justifyContent:'center'
        
    },
      text:{
        fontFamily:'poppins',
        fontWeight:'bold',
        fontSize:45,
        color:'white',
        // marginTop:80
    },
    textData:{
        alignItems:'center'
    },
    total:{
        marginTop:40,
        alignItems:'center'
    },
    welcome:{
        fontSize:35,
        color:'white'
    },
    first:{
        
        marginTop:30
    },
    viewFirst:{
        fontSize:20,
        color:'black',
        marginLeft:10
    },
    second:{
        
        marginTop:30
    },
})
export default SingleDayCourse;

function dispatch(arg0: { payload: boolean; type: "user/userLogin"; }) {
    throw new Error("Function not implemented.");
}
