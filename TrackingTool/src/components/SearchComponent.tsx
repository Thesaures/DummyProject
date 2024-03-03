import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const search =()=>{
    
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    



    return(
        <View style={styles.input}>
            <TextInput  style={styles.text} 
                        placeholder="Search here"
                        
            >
            </TextInput>
            <MaterialCommunityIcons name="magnify" size={20}/>
        </View>
        


    )
    }

    const styles = StyleSheet.create({
         input:{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#E4D8FE',
            marginHorizontal:18,
            borderRadius:10,
            marginTop:25,
            alignItems:'center'
         },
         text:{
            flex:0.9
         }
    })
    export default search;