import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { GetStartedPic, ILLogo } from '../../assets'
import { ComButton, Get } from '../../components'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'

export default function Getstarted({navigation}) {
    return (
        <ImageBackground source={GetStartedPic} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
                <View>
                    <ComButton title={'Get Started'} onPress={()=>{navigation.navigate('SignIn')}}/>
                <Get height={16}/>
                    <ComButton type={'secondary'} title={'Sign Up'} onPress={()=>{navigation.navigate('SignUp')}}/>
                </View>
        </ImageBackground>
        
    )
}


const styles = StyleSheet.create({
    page:{padding:40, justifyContent:'space-between',flex:1},
    text:{fontSize:28,
    marginTop:91,
    color:colors.text.white,
    fontFamily:fonts.primary[600]
    }
})
