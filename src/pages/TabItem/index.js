import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDoctor, IconDoctorActive, IconMap, IconMapActive, IconMessages } from '../../assets'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'

export default function TabItem({title,active,onPress,onLongPress}) {

    const Icon = () =>{
        if(title === 'Doctor'){
            return active? <IconDoctorActive/> : <IconDoctor/>
        }
        
        if(title === 'Messages'){
            return active ? <IconMapActive/> : <IconMessages/>
        }

        if(title === 'Hospitals'){
            return active? <IconMapActive/> : <IconMap/>
        }

        return <IconDoctor/>
    }

    return (
        <TouchableOpacity style={styles.component} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.textTitle(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    component:{
        alignItems:'center',
    },
    textTitle:(active)=>({
        fontSize:10,
        color:active? colors.text.MenuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop:4
    })
})
