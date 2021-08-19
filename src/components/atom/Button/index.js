import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { colors } from '../../../utilis/Color'
import IconOnly from './IconOnly'

export default function ComButton({type,title,onPress,icon}) {
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }


    return (
        
        <TouchableOpacity style={styles.container(type)}
        onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : (type)=>({
        backgroundColor: type === 'secondary' ? colors.button.secondary.backgound : colors.button.primary.backgound,
        paddingVertical:10,
        borderRadius:10
    }),
    text:(type)=>({
        color: type === 'secondary'? colors.button.secondary.text: colors.button.primary.text,
        textAlign:'center',
        fontSize:18,
        fontFamily:'Nunito-SemiBold'
    })
})
