import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Splash,SignIn, SignUp,UploadPhoto, Doctor, Messages, Hospital } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospital" component={Hospital}/>
        </Tab.Navigator>
    )
}

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
             <Stack.Screen name="MainApp"
            component={MainApp}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}

export default Router