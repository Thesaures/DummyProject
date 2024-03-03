import { StyleSheet, Text, View } from "react-native"
import ButtonComponant from "../components/button";
import { setStringItem } from "../utils/Utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../context/userSlice";
import Constants from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";
import Card from '../components/AssesmentCard'
import Search from "../components/SearchComponent";
const Page2 =()=>{
  const dispatch = useDispatch();
    

    const onPressLogout =async () =>{
        
            setStringItem(Constants.IS_LOGIN, 'false');
            dispatch(userLogin(false))
        
        
        }

    
    


    return(
        <View style={styles.container}>
            <View style ={styles.textData}>


            <Text style={styles.text}>Assesment</Text>
            </View>
          
            <View style ={styles.body}>
             <Card   assesmentName={'Mysql'} batch={'ILP 2023-24 Batch 1'}/>
             <Card   assesmentName={'Java'} batch={'ILP 2023-24 Batch 1'}/>
             <Card   assesmentName={'Python'} batch={'ILP 2023-24 Batch 1'}/>
             <ButtonComponant title={'Logout'} parameter='home' onPressLogin={onPressLogout}/>
            </View>
            
        </View>
    )
    }
const styles = StyleSheet.create({
      container:{
        height:'100%',
        backgroundColor:'#8518FF'
      },
      body:{
        height:'100%',
        backgroundColor:'white',
        borderTopEndRadius:50,
        borderTopLeftRadius:50,
        marginTop:60,
        //  justifyContent:'center'
        
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
})
export default Page2;

function dispatch(arg0: { payload: boolean; type: "user/userLogin"; }) {
    throw new Error("Function not implemented.");
}
