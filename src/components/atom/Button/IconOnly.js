import React from 'react'
import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import { PreviousLogo } from '../../../assets'

export default function IconOnly({onPress,icon}) {


    const Icon = () =>{
        if(icon === 'back-dark'){
            return(
                <PreviousLogo/>
            )
        }
        if(icon === 'back-light'){
            return(
                <Text>Icon putih</Text>
            )
        }

        return <PreviousLogo/>

    }

   
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>   
         )
}

const styles = StyleSheet.create({})
