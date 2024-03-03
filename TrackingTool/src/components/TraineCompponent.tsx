import { StyleSheet, Text, View } from "react-native";

type card ={batchName:string,userName:string}

const Card =(props:card)=>{
    const{batchName,userName} = props;
    console.log(batchName,userName);
    return(
        <View style = {styles.container}>
            <View style = {styles.first}>
            </View>
            <View style = {styles.second} >
               <Text style = {styles.name}>{userName}</Text>
               <Text style = {styles.batch}>{batchName}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:30,
        padding:8,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        elevation:8,
        marginTop:30,
        backgroundColor: 'white'
    },
    first:{
        flex:0.2,
        height:70,
        borderWidth:2,
        borderRadius:50

    },
    second:{
        flex:0.7,
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