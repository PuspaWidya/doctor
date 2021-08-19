import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Splash,SignIn, SignUp,UploadPhoto } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () =>{
    return(
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="splash" component={Splash}
            options={{headerShown:false}}
            />
            <Stack.Screen name="GetStarted"
            component={GetStarted}
            options={{headerShown:false}}
            />
            <Stack.Screen name="SignIn"
            component={SignIn}
            options={{headerShown:false}}
            />
            <Stack.Screen name="SignUp"
            component={SignUp}
            options={{headerShown:false}}
            />
            <Stack.Screen name="UploadPhoto"
            component={UploadPhoto}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}

export default Router