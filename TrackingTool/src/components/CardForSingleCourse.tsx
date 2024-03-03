import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type card ={courseName:string}

const SingleCourseCard =(props:card)=>{
    const{courseName} = props;
    return(
        
        <View style = {styles.container}>
            <View>
            <Text style = {styles.name}>{courseName}</Text>
               <Text style = {styles.batch}>4hr 20min</Text>
               
            </View>
            <View>
                    <View style ={styles.button}>
                    <Text style ={styles.text}>Completed</Text>
                    </View>
                    
                    
            </View>
               
        </View>
        
    )

}
const styles = StyleSheet.create({
    container:{
        
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
         marginTop:20,
         alignItems:'flex-end',
         padding:1,
         
    },
    text:{
      fontSize:15,
        fontFamily:'poppins',
        color:'#33DB76'
    },
    
})
export default SingleCourseCard;