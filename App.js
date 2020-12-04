import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';


function ColorButton({color, onPress = f => f }) {
  return (
  <TouchableHighlight style={styles.button} onPress={() => onPress(color)} underlayColor='orange'>
        <View style={styles.row}>
          <View style={[styles.simple, {backgroundColor: color}]}/>
          <Text style={styles.buttonText}>{color}</Text>
        </View>
     </TouchableHighlight>
  )
}


export default function App(){
  const [backgroundColor, setBackgroundColor] = useState('blue')

  return (
    <View style={[styles.page, {backgroundColor}]}>

      <ColorButton color='red' onPress={setBackgroundColor}/>
      <ColorButton color='yellow' onPress={setBackgroundColor}/>
      <ColorButton color='blue' onPress={setBackgroundColor}/>
      <ColorButton color='green' onPress={setBackgroundColor}/>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, .7)'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  simple: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  }

})
