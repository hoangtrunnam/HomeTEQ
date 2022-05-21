import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './Navigations/Index'
import Account from './Views/Account/Account'
import BottomTab from './Navigations/BottomTab'
import CreateHome from './Views/CreateHome/CreateHome';
import MainStack from './Navigations/MainStack';


const Index = () => {
    const checkToken = useSelector(state => state.AuthLoginToken)
    console.log('token aaaaaaaaa',checkToken);
    if (checkToken.otp) {
        return (
            <NavigationContainer>
                {/* <BottomTab /> */}
                {/* <CreateHome/> */}
                <MainStack/>
            </NavigationContainer>
        )
    }
    else {
        return (
            <RootStack />
        )
    }

}

export default Index

const styles = StyleSheet.create({

})