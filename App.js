import * as React from 'react';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';

import picBiscuit from './assets/biscuit.jpg'
import picJungle from './assets/jungle.jpg'


export default function App(){


  return (
    <View style={styles.page}>

      <Image style={styles.image} source={picBiscuit}/>
      <Image style={styles.image} source={picJungle}/>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#DDD'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
    backgroundColor: 'yellow',
    margin: 10,
    padding: 5

  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get('window').width - 10
  }
})
