import React from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

export default function ColorForm({onNewColor = f => f}) {

    const [inputValue, setInputValue] = React.useState('')

    const input = React.useRef()

    return (
            <View style={styles.container}>
                <TextInput
                    ref={input}
                    onChangeText={setInputValue}
                    style={styles.txtInput}
                    autoCapitalize='none'
                    value={inputValue}
                    placeholder='enter a color...'
                />
                <Button title='add' onPress={() => {
                    input.current.blur();
                    onNewColor(inputValue)
                    setInputValue('')
                }}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
})
