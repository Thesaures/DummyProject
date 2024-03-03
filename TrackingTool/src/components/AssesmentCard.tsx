import { StyleSheet, Text, View } from "react-native";

type card ={assesmentName:string,batch:string}

const Card =(props:card)=>{
    const{assesmentName,batch} = props;
    return(
        <View style = {styles.container}>
               <Text style = {styles.name}>{assesmentName}</Text>
               <Text style = {styles.batch}>{batch}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{

        marginHorizontal:30,
        padding:20,
        justifyContent:'flex-start',
        
        borderRadius:10,
        elevation:8,
        marginTop:30,
        backgroundColor: 'white',
        
    },
    
    name:{
        fontWeight:'bold',
        fontSize:20
    },
    batch:{
        
        fontSize:15
    },
    
})
export default Card;