import react from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
type content={title:String}
const textComponent = ({title}:content)=>{
    return(
    <View  >
        <Text style={styles.text}>{title}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily:'poppins',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:50
    }
})
export default textComponent;