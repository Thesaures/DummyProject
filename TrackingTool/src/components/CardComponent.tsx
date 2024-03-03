import React from "react";
import { StyleSheet, Text, View } from "react-native";
type values ={batch:string,traineNo:number,date:string,perc:string}
const Card =(props:values)=>{
    const {batch,traineNo,date,perc} = props;
    return(
        
        <View style = {styles.container}>
            <View style = {styles.col} >
                    <Text style = {styles.text}>{batch}</Text>
                    <View style = {styles.traineNo}>
                        <Text style = {styles.textCentre}>Trainees</Text>
                        <View style = {styles.inside}>
                            <Text>{traineNo}</Text>
                        </View>
                    </View>
                    
                    <Text style = {styles.textLast}>{date}</Text>
            </View>
            <View>
                    <Text>{perc}</Text>
            </View>
 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:30,
        padding:20,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        elevation:8,
        marginTop:30,
        backgroundColor: 'white'
    },
    
    inside:{
        backgroundColor:'grey',
        marginLeft:20,
        padding:3,
        borderRadius:5,
        
    },
    traineNo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
        
    },
    col:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        
    },
    text:{
        fontWeight:"bold",
        fontFamily:'poppins',
        fontSize:18,
        color:'black'
    },
    textLast:{
        fontFamily:'poppins',
        fontSize:15,
        color:'#8F00FF'
        
    },
    textCentre:{
        fontFamily:'poppins',
        fontSize:15
        
    },
})
export default Card;