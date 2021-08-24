import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { DummyUser } from '../../../assets'
import { colors } from '../../../utilis/Color'
import { fonts } from '../../../utilis/fonts/fonts'

export default function HomeProfile() {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.user}/>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profesion}>Product Designer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    user:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    },
    profesion:{
        fontSize:12,
        fontFamily:fonts.primary[400],
        color:colors.text.secondary
    }
})
