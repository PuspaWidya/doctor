import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'

export default function Splash() {
  
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('GetStarted')
    },3000)
    
  }, [])


    return (
        <View style={styles.page}>
        <ILLogo style={styles.logo}/>
        <Text style={styles.text}>My Doctor</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  page:{ flex:1, alignItems:'center', justifyContent:'center'},
  logo:{marginBottom:20}
  ,
  text:{fontSize:20,
     fontFamily:fonts.primary[600],
      color:colors.text.primary}
})
