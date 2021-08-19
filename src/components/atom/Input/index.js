import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utilis/Color'

export default function Input({text}) {
    return (
        <View>
            <Text style={styles.label}>{text}</Text>
            <TextInput
            style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:10,
        borderColor:colors.border,
        padding:12
    },
    label:{
        fontSize:16,
        color:colors.text.secondary,
        marginBottom:6,
        fontFamily:'Nunito-Regular'
    }
})
