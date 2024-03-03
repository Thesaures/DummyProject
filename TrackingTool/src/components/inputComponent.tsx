import react, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type content={title:string, change: (text: string) => void}

const InputComponent = (props:content)=>{
    const{ title, change}= props
    return(
    <View style ={styles.view} >
        <Text style ={styles.text}>{title}</Text>

        <TextInput style ={styles.input}
        onChangeText={change}
        />
    
    </View>
    )
}
const styles = StyleSheet.create({
    input:{
        // marginHorizontal:-150,
        padding:1,
        borderBottomWidth:1,
    },
    text:{
        
    },
    view:{
        width:300,
        marginHorizontal:-80,
        margin:10
    }
})
export default InputComponent;