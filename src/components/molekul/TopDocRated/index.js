import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { DummyDoct1, IconStar } from '../../../assets'
import { colors } from '../../../utilis/Color'
import { fonts } from '../../../utilis/fonts/fonts'

export default function TopRatedDoc() {
    return (
       
            <View style={styles.container}>
                    <Image source={DummyDoct1} style={styles.avatar}/>
                    <View style={styles.textWrapper}>
                        <Text style={styles.name}>Alexa Rachel</Text>
                        <Text style={styles.category}>Pediatrician</Text>
                    </View>
                    <View style={styles.starIcon}>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        // borderRadius:50/2,
        marginRight:16,

    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:16
    },
    starIcon:{
        flexDirection:'row'
    },
    name:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color:colors.text.primary
    },
    category:{
        fontSize:12,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:2
    },
    textWrapper:{
        flex:1,
    }
})
