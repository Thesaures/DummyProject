import { StyleSheet, Text, View } from "react-native"
import ButtonComponant from "../components/button";
import { setStringItem } from "../utils/Utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../context/userSlice";
import Constants from "../utils/Constants";
import Card from '../components/AssesmentCard'
import ChartPie from "../components/PieChartComponent";
const BatchDetailsPage =()=>{
return(
        <View style={styles.container1}>
            <View style ={styles.textData}>
            <Text style={styles.text}>Batch</Text>
            </View>
            <View style ={styles.body1}>
                {/* Page Body */}
                <ChartPie/>
                
            </View>
            
        </View>
    )
    }
const styles = StyleSheet.create({
      container1:{
        height:'100%',
        backgroundColor:'#8518FF'
      },
      body1:{
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
export default BatchDetailsPage;


