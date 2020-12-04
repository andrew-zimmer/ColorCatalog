import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function App(){


  return (
    <View style={styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={styles.text}>green</Text>
      <Text style={styles.text}>blue</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#DDD'
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
    backgroundColor: 'yellow',
    margin: 10,
    padding: 5

  }
})
