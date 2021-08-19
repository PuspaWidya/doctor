import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = ({height,weight,width}) => {
    return (
        <View>
            <View style={styles.space(height,weight,width)}/>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    space:(height,weight,width)=>({height:height,weight:weight,width:width})
})
