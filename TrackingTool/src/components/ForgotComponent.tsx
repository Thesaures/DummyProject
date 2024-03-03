import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const Forgot =()=>{
    const navigation = useNavigation();
    const onPress =()=>{
        navigation.navigate('ForgotScreen',{})
    }
    return(
    <View  style={styles.forgot}>
        <Text onPress={onPress}>Forgot Password ?</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    forgot:{
        alignItems:'center',
        marginTop:10,
        width:200
    }
})
export default Forgot;