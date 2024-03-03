import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type card ={dayName:string,time:string,status:string}

const DayCard =(props:card)=>{
    const{dayName,time,status} = props;
    return(
        
        <View style = {styles.container}>
            <View>
            <Text style = {styles.name}>{dayName}</Text>
               <Text style = {styles.batch}>{time}</Text>
               
            </View>
            <View>
                    <View style ={styles.button}>
                    <Text style ={styles.text}>{status}</Text>
                    </View>
                    
                    
            </View>
               
        </View>
        
    )

}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:30,
        padding:15,
        justifyContent:'space-between',
        borderRadius:10,
        elevation:9,
        marginTop:20,
        backgroundColor: 'white',
        
    },
    
    name:{
        fontWeight:'bold',
        fontSize:20
    },
    batch:{
        
        fontSize:15
    },
    textLast:{
        fontFamily:'poppins',
        fontSize:15,
        color:'#8F00FF'
        
    },
    button:{
        
         borderRadius:20,
         marginTop:40,
         alignItems:'center',
         padding:1,
         width:100
    },
    text:{
      fontSize:15,
        fontFamily:'poppins',
        color:'#33DB76'
    },
    
})
export default DayCard;