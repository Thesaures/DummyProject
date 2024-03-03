import React from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView, FlatList, Image } from 'react-native';
 


const Page4 = () => {
interface SectionData {
  title: string;
  data: string[];
}
 
const  SectionData = [
  {
    title: 'Section 1',
    data: [
        {
            id:'horizontalList',
            renderHorizontal:true,
            data:[
                { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' },
              { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' },
            ]
            
  }],
  },

  {
    title: 'Section 1',
    data: [
        {
        
            data:[
                { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' },
              { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' }, { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
              { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
              { id: '4', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg' },
              { id: '5', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg' },
            ]
            
  }],
  },
  
  
  
  // Add more sections as needed
];
 

 

  return (
   
            <SectionList
              sections={SectionData}
              keyExtractor={(item,index)=>item.id+index}
              
              renderSectionHeader={({section:{title}})=>(
                <Text style={{fontWeight:'bold',fontSize:40}}>{title}</Text>
              )}
              renderItem={({item,section})=>{
                if(item.renderHorizontal){
                    return(
                        <FlatList
                          horizontal
                          data={item.data}
                          renderItem={({item})=>(
                            <View style={{marginRight:20}}>
                                <Text>{item.title}</Text>
                                <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50 }} />
                            </View>
                          )}
                          keyExtractor={item=>item.id.toString()}/>
                    );
                    
                }
                else{
                    return(
                        <View style={{paddingVertical:10}}>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }
              }}
            />
        
  );
};
 
const styles = StyleSheet.create({
  
});
 
export default Page4;