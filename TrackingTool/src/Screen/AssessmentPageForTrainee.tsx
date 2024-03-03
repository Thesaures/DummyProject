import { Button, FlatList, ProgressBarAndroid, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from '../components/TraineeAssesmentCard'
import { assesmentList } from "../Network/ApiHook3";
import React, { useEffect, useMemo, useState } from "react";
import { questionsForAsses } from "../Network/ApiHook4";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { updateUserScore } from "../Network/ApiHook6";
import { RadioButton } from 'react-native-paper';
import { useRoute } from "@react-navigation/native";
import {Bar} from 'react-native-progress';
const AssesmentPage =()=>{
  
  const route:any = useRoute();
    const value = route.params.number;
    const [questionList, setStoryList] = useState<any>([{
      "question_id": 1,
      "question": "What  is my name ?",
      "option_a": "Anna",
      "option_b": "Raphel",
      "option_c": "Thimna",
      "option_d": "Elsa",
      "correct_answer": "Thimna"
  },]);
    useEffect(() => {
        console.log('effect activated');
        const getStory = async () => {
          try {
            const {loginResp, errorMessage} = await questionsForAsses(value)
            console.log(loginResp);
            setStoryList(loginResp);
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getStory();
    }, []);
    
  const [id, setChecked] = useState(0);
  const [finish, setFinish] = useState(false);
  const [progress, setProgress] = useState(0.3333);
  const callQuestion =()=>{
         setChecked(id+1)
         console.log(questionList.length)
         console.log(id)
         setProgress(progress+0.3333)
         console.log(progress)
         if(id == questionList.length-2){
          setFinish(true)
         }
   }
   const [checked, setOption] = useState("");
   const [score, setScore] = useState(0);
   
   const handleFunc=(newValue)=>{
    setOption(newValue)
    updateScore(newValue)
   }
  const updateScore=(newValue)=>{
    if(newValue === questionList[id].correct_answer){
      console.log("true")
      setScore(score+80)
    }
  }
  const scoreUpdate=async()=>{
    console.log("update Score")
    updateUserScore(value,6,score)
    // await updateUserScore(value,6,score)
  }
  
    return(
        
        <View style={styles.container}>
            <View style={styles.total} >   
            <Text style={styles.text}>Assessment</Text>
            </View>
            <View style ={styles.body}>
            <View style ={styles.first}>
              <View style ={styles.second}>
              <Text style ={styles.ques}>{questionList[id].question}</Text>
              </View>
              
              <View style ={styles.third}>
              <RadioButton.Group onValueChange={handleFunc} value={checked}>
              
              <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <RadioButton.Item 
              label="" 
              value={questionList[id].option_a}
              style ={styles.radio} />
              <Text style ={styles.ques}>{questionList[id].option_a}</Text>
              </View>

              <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <RadioButton.Item 
              label="" 
              value={questionList[id].option_b}
              style ={styles.radio} />
              <Text style ={styles.ques}>{questionList[id].option_b}</Text>
              </View>

              <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <RadioButton.Item 
              label="" 
              value={questionList[id].option_c}
              style ={styles.radio} />
              <Text style ={styles.ques}>{questionList[id].option_c}</Text>
              </View>
              
              <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <RadioButton.Item 
              label="" 
              value={questionList[id].option_d}
              style ={styles.radio} />
              <Text style ={styles.ques}>{questionList[id].option_d}</Text>
              </View>

              </RadioButton.Group>
              <Text>{score}</Text>
              </View>
              <View style={{marginHorizontal:20}}>
              <Bar
                indeterminate={false}
                progress={progress}
                borderWidth={2}
                borderRadius={30}
                color="#33DB76"
                width={345}
                height={20}
              />
               {/* <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={progress}
                  color={'#33DB76'}
                  
                /> */}
              </View>
              
              
              <View style ={styles.button}>
      <View>
      {finish &&(<Button title="Finish" onPress={() => scoreUpdate()}/>  )}
      {!finish &&( <Button title="Press me" onPress={callQuestion}/>   )}
     </View>
      
      </View>
      </View >
      
      
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
        marginTop:30,
        //  justifyContent:'center'
        
    },
      text:{
        fontFamily:'poppins',
        fontWeight:'bold',
        fontSize:35,
        color:'white',
        // marginTop:80
    },
    radio:{
      alignSelf:'flex-start'
  },
      ques:{
        fontFamily:'poppins',
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginLeft:20
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
        
        marginTop:200,
        marginHorizontal:15,
        backgroundColor:'white',
        elevation:10,
        borderRadius:15
    },
    viewFirst:{
        fontSize:20,
        color:'black',
        marginLeft:10
    },
    second:{
        backgroundColor:'#E4D8FE',
        marginTop:20,
        borderRadius:15,
        marginHorizontal:10
    },
    third:{
      marginLeft:100,
      marginTop:20
  },
  button:{
    marginHorizontal:125,
    marginVertical:25
  }
})
export default AssesmentPage;

