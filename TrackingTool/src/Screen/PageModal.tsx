import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  const [slide, setslide] = useState(false);
  const toggleSlide = () => {
    setslide(!slide);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isBottom, setBottom] = useState(false);
  const toggleBottom = () => {
    setBottom(!isBottom);
  };
  


//   swipeDirection={['up', 'left', 'right', 'down']}
//       onSwipeComplete={toggleModal}
  return (
    <View >
        <View style={styles.button}>
        <Button title="slide" onPress={toggleSlide} />
        </View>
        <View style={styles.button}>
        <Button title="zoom" onPress={toggleModal} />
        </View>
        <View style={styles.button}>
        <Button title="bottom" onPress={toggleBottom} />
        </View>

        <Modal isVisible={isBottom} style={{margin:0}}>
        <View style={{ backgroundColor:'white',
                      height:500,
                      marginTop:350,
                      borderTopEndRadius:50,
                      borderTopLeftRadius:50
                     }}>
        
        <View style={styles.button}>
        <Button title="Hide modal" onPress={toggleBottom} />
        </View>
          
        </View>
      </Modal>


      <Modal isVisible={slide} 
        animationIn="slideInLeft"
        animationOut="slideOutRight">
      <View style={styles.view}>
        <View style={styles.button}>
        <Button title="Hideeee" onPress={toggleSlide}  />
        </View>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible} 
      testID={'modal'}
      
      backdropColor="yellow"
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={2000}
      animationOutTiming={2000}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
       >
      <View style={styles.view}>
        <View style={styles.button}>
        <Button title="Hideeee" onPress={toggleModal}  />
        </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
    view:{
        marginHorizontal:30,
        height:150,
        borderColor:'black',
        borderWidth:3,
        backgroundColor:'white'
    },
    button:{
        margin:20,
       marginHorizontal:20
    },
    customBackdrop: {
        flex: 1,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
      },
      customBackdropText: {
        marginTop: 10,
        fontSize: 17,
      },
})
export default ModalTester;