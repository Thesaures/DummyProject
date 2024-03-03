import { StyleSheet, Text, View } from "react-native"
import Card from "../components/CardComponent"
import { useSelector } from "react-redux";
const Home = ()=>{
    const name = useSelector((state: any) => state.userDataReducer.details);
    console.log(name);
    return(
    <View style={styles.container}>
        <View style={styles.textData}>
        <Text style={styles.text}>Batches</Text>
        </View>
       <View style={styles.body}>
            
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#8518FF',
        
    },
    text:{
        fontFamily:'poppins',
        fontWeight:'bold',
        fontSize:45,
        color:'white',
        marginTop:80
    },
    textData:{
        alignItems:'center'
    },
    body:{
        height:'100%',
        backgroundColor:'white',
        borderTopEndRadius:50,
        borderTopLeftRadius:50,
        marginTop:60,
        //  justifyContent:'center'
        
    },
    
})
export default Home;