import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Card from '../components/TraineeAssesmentCard'
import { assesmentList } from "../Network/ApiHook3";
import { useEffect, useState } from "react";
import DayCard from "../components/OneDayCard";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Page2 =()=>{
    //const details = useSelector((state: any) => state.userDataReducer.details);
    //console.log(details)
    const navigation = useNavigation();
    const [feedList, setStoryList] = useState<any>([]);
    useEffect(() => {
        console.log('effect activated');
        const getStory = async () => {
          try {
            const {loginResp, errorMessage} = await assesmentList(8)
            console.log(loginResp);
            setStoryList(loginResp);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getStory();
    }, []);

    const goTo =(id)=>{
        console.log(id)
        navigation.navigate('Single',{number:id})
    }
    const nav =(id)=>{
        
        navigation.navigate('TraineAssessment',{number:id})
    }
    const dayList=[
                    {id:1,
                    day:"Day 1",
                    status:"completed",
                    time:"1hr 10min"},
                    {id:2,
                    day:"Day 2",
                    status:"completed",
                    time:"1hr 10min"},
                    {id:3,
                    day:"Day 3",
                    status:"completed",
                    time:"1hr 10min"},
                    {id:4,
                    day:"Day 4",
                    status:"completed",
                    time:"1hr 10min"}  
                    ]
    return(
        
        <View style={styles.container}>
            <View style={styles.total} >
            <Text style={styles.welcome}>Welcome</Text>    
            <Text style={styles.text}>Elena Maria</Text>
            </View>
            
            <View style ={styles.body}>
            <View style ={styles.first}>
                <Text style ={styles.viewFirst}>Assesments</Text>
                <FlatList
                 data={feedList.assessments}
                 renderItem={({item}) => (<TouchableOpacity onPress={() => nav(item.assessment_id)}><Card assesmentName={item.assessment_name} batch={feedList.Batch} date={item.end_date}/></TouchableOpacity>)}
                />
               
              
            </View >  
             
             <View style ={styles.first}>
             <Text style ={styles.viewFirst}>Learning Days</Text>
               
               <FlatList
                 data={dayList}
                 renderItem={({item}) => (<TouchableOpacity onPress={() => goTo(item.id)}><DayCard dayName={item.day} time={item.time} status={item.status}/></TouchableOpacity>)}
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
        marginLeft:40
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
export default Page2;

function dispatch(arg0: { payload: boolean; type: "user/userLogin"; }) {
    throw new Error("Function not implemented.");
}
