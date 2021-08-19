import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ComButton, Get, Header, Input } from '../../components'
import { colors } from '../../utilis/Color'

export default function SignUp({navigation}) {
    return (
        <View style={styles.page}>
            <Header onPress={()=>navigation.goBack()} text="Daftar Akun"/>
            <View style={styles.content}>
                <Input text="Full Name"/>
                <Get height={24}/>
                <Input text="Pekerjaan"/>
                <Get height={24}/>
                <Input text="Email"/>
                <Get height={24}/>
                <Input text="Password"/>
                <Get height={40}/>
                <ComButton title="Continue"
                onPress={()=>navigation.navigate('UploadPhoto')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        padding:40,
        paddingTop:0,
    },
    page:{
        flex:1,
        backgroundColor:colors.white,
    }
})
