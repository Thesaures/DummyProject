import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import ButtonComponant from "../components/button";
import { setStringItem } from "../utils/Utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../context/userSlice";
import Constants from "../utils/Constants";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/TraineCompponent";
import Search from "../components/SearchComponent";
import { traineList } from "../Network/ApiHook2";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from "react";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
const Page1 =()=>{
 

        const [feedList, setStoryList] = useState<any>([]);
        const [isLoading, setLoading] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredData, setFilteredData] = useState<any>([]);
        useEffect(() => {
          console.log('effect activated');
          
          const timeout = setTimeout(() => {
            setLoading(true);
        }, 2000);


          const getStory = async () => {
            try {
              const {loginResp, errorMessage} = await traineList()
          
              console.log(loginResp);
              setStoryList(loginResp);
              setFilteredData(loginResp);
            //   if(loginResp){
            //     setLoading(false);
            //   }
            //   setLoading(true)
            //   console.log(feedList[0].feedImage);
            } catch (error) {
              console.error('Error:', error);
            }
          };

          getStory();
          
        }, []);
      

        const handleSearch = (text) => {
          console.log(text)
          setSearchQuery(text);
          // Filter the data based on the search query
          const filtered = feedList.filter(item =>
            item.user.user_name.toLowerCase().includes(text.toLowerCase())
          );
          setFilteredData(filtered);
        };
    

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style ={styles.textData}>
            <Text style={styles.text}>Trainees</Text>
            </View>
            <View style ={styles.body}>
            <View style={styles.input}>
            <TextInput  style={styles.text1} 
                        placeholder="Search here"
                        onChangeText={handleSearch}
                        value={searchQuery}
            >
            </TextInput>
            <MaterialCommunityIcons name="magnify" size={20}/>
        </View>

             
                
                
    
                {isLoading && <FlatList
                scrollEnabled={false}
                horizontal={false}
                data={filteredData}
                renderItem={({item}) => <Card batchName={item.batch.batch_name} userName={item.user.user_name}/>}
                />}

                 {!isLoading && <FlatList
                    scrollEnabled={false}
                    horizontal={false}
                    data={feedList}
                    renderItem={({item}) => <ShimmerPlaceholder
                                LinearGradient={LinearGradient}
                                visible={isLoading}
                                style={{width: 350, height: 100, marginTop: 20, marginLeft: 30}}>
                        </ShimmerPlaceholder>}
                />} 
            
            
        
              </View>
            
        </View>
        </ScrollView>
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
    input:{
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#E4D8FE',
      marginHorizontal:18,
      borderRadius:10,
      marginTop:25,
      alignItems:'center'
   },
   text1:{
      flex:0.9
   }
})

export default Page1;