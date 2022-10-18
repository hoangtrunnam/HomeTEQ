import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const BtnCustom = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.btn, props.style]}
        >
            <Image source={props.ic_source}/>
            <Text style={[styles.txtBtn, props.styleTxt]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default BtnCustom;

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 55,
        backgroundColor: 'pink',
        borderRadius: 54,
        height: 45, width: '50%',
        flexDirection:'row',
    },
    txtBtn: {
        fontSize: 16, 
        marginHorizontal:5
    }
});
