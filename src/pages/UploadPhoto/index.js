import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Get, Header } from '../../components'
import { IconAddPhoto, IlNullPhoto } from '../../assets'
import { ComButton } from '../../components'
import { Link } from '../../components'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'


export default function UploadPhoto() {
    return (
        <View style={styles.page}>
            <Header text={'Upload Photo'}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.wrapper}>
                        <Image source={IlNullPhoto} style={styles.image}/>
                        <IconAddPhoto style={styles.addPhoto}/>
                    </View>
                        <Text style={styles.name}>Shayna Melinda</Text>
                        <Text style={styles.job}>Product Designer</Text>
                        <Get height={88}/>
                </View>
                <View>
                    
                    <ComButton title={'Upload and Continue'}/>
                    <Get height={30}/>
                    <Link text="Skip for this" align="center" size={16}/>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    },
    image:{
        width:110,
        height:110
    },
    wrapper:{
        height:130,
        width:130,
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:130/2,
        alignItems:'center',
        justifyContent:'center'
    },
    addPhoto:{
        position:'absolute',
        bottom:8,
        right:6
    },
    name:{
        fontFamily:fonts.primary[600],
        fontSize:24,
        textAlign:'center',
        color:colors.text.primary,
        marginBottom:4
    },
    job:{
        fontFamily:fonts.primary[400],
        fontSize:18,
        textAlign:'center',
        color:colors.text.secondary
    },
    profile:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    content:{
        paddingHorizontal:40,
        flex:1,
        justifyContent:'space-between',
        paddingBottom:64
    }
})
