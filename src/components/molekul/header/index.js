import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utilis/Color'
import { Get,ComButton } from '../../atom'


export default function Header({onPress,text}) {
    return (
            <View style={styles.container}>
                <ComButton type="icon-only" icon="back-dark" onPress={onPress}/>
                <Text style={styles.text}>{text}</Text>
                <Get width={40}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        paddingHorizontal:16,
        paddingVertical:30,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        flex:1,
        fontSize:25,
        fontFamily:'Nunito-Bold',
        color:colors.text.primary,
        paddingLeft:5
    },
   
})
