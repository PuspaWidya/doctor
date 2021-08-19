import React from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { ComButton } from '../../components'
import { fonts } from '../../utilis/fonts/fonts'
export default function SignUp1() {


    return (
        <View style={styles.background}>
            <Text style={styles.textBG}>Daftar Akun</Text>

                <Text style={styles.text}>Full Name</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}>Pekerjaan</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}>Email Address</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input}></TextInput>
            
        <TouchableOpacity style={styles.btn}> 
            <Text style={styles.textbtn}>Confirm</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'gray',
        padding:10,
        
    },
    background:{
        // backgroundColor:'yellow',
        flex:1,
        padding:30
        
    },
    textBG:{
        textAlign:'center',
        fontSize:20,
        paddingRight:90,
        color:'black',
        fontWeight:'400'
    },
    text:{
        fontFamily:fonts.primary[600],
        paddingTop:40,
        color: '#7D8797',
        fontSize:16,
        padding:6
    },
    btn:{
        backgroundColor:'#0BCAD4',
        paddingVertical:10,
        borderRadius:10,
        marginTop:40

    },
    textbtn:{
        textAlign:'center',
        color:'white',
        margin:10
    }
})
