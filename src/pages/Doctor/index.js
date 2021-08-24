import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctCategory, Get, HomeProfile, NewsItem, TopRatedDoc } from '../../components'
import { colors } from '../../utilis/Color'
import { fonts } from '../../utilis/fonts/fonts'

export default function Doctor() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Get height={30}/>
                <HomeProfile/>
                <Text style={styles.wellcome}>Mau konsultasi dengan siapa hari ini?</Text>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.docContainer}>
                            <Get width={16}/>
                            <DoctCategory/>
                            <DoctCategory/>
                            <DoctCategory/>
                            <DoctCategory/> 
                            <Get width={16}/>
                        </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                    <TopRatedDoc/>
                    <TopRatedDoc/>
                    <TopRatedDoc/>
                    <Text style={styles.sectionLabel}>Good News</Text>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <Get height={30}/>
               </ScrollView>   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:colors.secondary,
        flex:1
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        paddingHorizontal:16,
    
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    wellcome:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        marginTop:30,
        color:colors.text.primary,
        marginBottom:16,
        maxWidth:209
    },
    docContainer:{
        flexDirection:'row'
    },
    wrapperScroll:{
        marginHorizontal:-16
        //supayatidak ada gap
    },
    sectionLabel:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        marginBottom:16,
        marginTop:16,
        color:colors.text.primary,
    }
})
