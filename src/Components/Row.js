import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Row = (props) => {
    if (props.onPress) {
        return (
            <TouchableOpacity style={[styles.container, props.style]}
                onPress={props.onPress ? props.onPress : null}
                activeOpacity={0.8}
            >
                {props.children}
            </TouchableOpacity>
        );

    }
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
};

export default Row;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent:'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
