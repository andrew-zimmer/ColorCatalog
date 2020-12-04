import * as React from 'react';
import { Text, View, ActivityIndicator, ProgressBarAndroid, Button, Alert, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const {height, width } = Dimensions.get('window')

export default function App(){

  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`)
  }

  return (
    <View style={{padding: 50}}>
      <ProgressBarAndroid
        progress={.5}
        styleAttr='Horizontal'
        indeterminate={false}
        color='blue'
      />
      <ActivityIndicator size='large' color='#61dbfb'/>
      <Button title="click me" onPress={onButtonPress}/>
      <Text>{Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>

    </View>
  )
}
