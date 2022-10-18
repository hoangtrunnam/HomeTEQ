import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Views/Welcome/Welcome';
import Login from '../Views/Login/Login';
import CreateAccount from '../Views/CreateAccount/CreateAccount';
import ConfirmOTP from '../Views/ConfirmOTP/ConfirmOTP';
import BottomTab from './BottomTab';
import CreateHome from '../Views/CreateHome/CreateHome';


const Stack = createNativeStackNavigator();

const AuthStack = () => (

    <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
    }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create account" component={CreateAccount} />
        <Stack.Screen name="Confirm OTP" component={ConfirmOTP} />
        {/* <Stack.Screen name="CreateHome" component={CreateHome} /> */}
        
        {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
    </Stack.Navigator>



)

export default AuthStack