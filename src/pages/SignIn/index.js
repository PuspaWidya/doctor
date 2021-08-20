import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { ComButton, Link, Input, Get} from '../../components'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'


export default function SignIn({navigation}) {
    return (
        <View style={styles.logo}>
                <ILLogo/>
                <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
                <Input text={'Email Adress'}/>
                <Get height={24}/>
                <Input text={'Password'}/>
                <Get height={10}/>
                <Link text={'Forgot My Password'} size={12}/>
                <Get height={40}/>
            <ComButton title="Sign In" onPress={()=> navigation.replace('MainApp')}/>
                <Get height={30}/>
                <Link text={'Create New Account'} size={16} align={'center'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        padding:40,
        flex:1,
    },
    text:{
        maxWidth:153,
        marginTop:40,
        marginBottom:40,
        fontFamily:fonts.primary[600],
        fontSize:20,
        color:colors.text.primary
    }
})
