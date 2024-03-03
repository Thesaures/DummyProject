import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type card ={assesmentName:string,batch:string,date:string}

const Card =(props:card)=>{
    const{assesmentName,batch,date} = props;
    return(
        
        <View style = {styles.container}>
            <View>
            <Text style = {styles.name}>{assesmentName}</Text>
               <Text style = {styles.batch}>{batch}</Text>
               <Text style = {styles.textLast}>{date}</Text>
            </View>
            <View>
                    <TouchableOpacity  style ={styles.button}>
                    <Text style ={styles.text}>Take Test</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#3E94D2',
         borderRadius:20,
         marginTop:40,
         alignItems:'center',
         padding:1,
         width:100
    },
    text:{
      fontSize:15,
        fontFamily:'poppins',
        color:'white'
    },
    
})
export default Card;