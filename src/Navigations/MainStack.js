import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateHome from '../Views/CreateHome/CreateHome';
import BottomTab from './BottomTab';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    const checkIdHome = useSelector(state => state.checkIdCreateHome)
    console.log('state in mainstack', checkIdHome);
    if (!checkIdHome.id) {
        return (
            <Stack.Navigator initialRouteName="Create Home" screenOptions={{
                headerShown: false,
                headerBackTitleVisible: false,
            }}>
                <Stack.Screen name="Create Home" component={CreateHome} />
                <Stack.Screen name="BottomTab" component={BottomTab} />

            </Stack.Navigator>
        )
    }
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
        }}>
            <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({
    
})