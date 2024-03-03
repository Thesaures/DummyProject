import React from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

const ChartPie = () => {
  const widthAndHeight = 200;
  const series = [123,321,50];
  const sliceColor = ['#4C0088', '#A93AFF', '#1B0030'];
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.heading}>
        <Text>Assesment Score</Text>
        </View>
        <View style={styles.chart}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        //   doughnut={true}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderColor:'black',
    borderWidth:3,
    marginTop:100,
    marginHorizontal:30,
    borderRadius:30
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  heading:{
    
    borderWidth:2,
    
    
  },
  chart:{
      alignItems:'center'
  }
});

export default ChartPie;