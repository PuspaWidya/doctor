import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILDocUmum } from '../../../assets'
import { colors } from '../../../utilis/Color'
import { fonts } from '../../../utilis/fonts/fonts'


export default function DoctCategory() {
    return (
        <View style={styles.container}>
            <ILDocUmum style={styles.image}/>
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.text}>Dokter Umum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:colors.cardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:100,
        height:130
    },
    image:{
        marginBottom:28
    },
    label:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.primary
    },
    text:{
        fontSize:12,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    }
})
