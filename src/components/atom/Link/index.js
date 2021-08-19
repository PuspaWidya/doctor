import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utilis/Color'

export default function Link({text,size,align}) {
    return (
        <View>
            <Text style={styles.link(size,align)}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    link : (size,align)=>({
        fontSize:size,
        fontFamily:'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign:align,
        color:colors.text.secondary
    })
})
