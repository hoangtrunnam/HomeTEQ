import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Row from '../Components/Row'
import { ICONS } from '../Constants/Icons'

const ServicesHome = () => {
    return (
        <View style={styles.container}>
            <Row style={styles.row}>
                <TouchableOpacity style={styles.icServices}>
                    <Image source={ICONS.ic_visitors}   />
                    <Text style={styles.txtServices}>Visitors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icServices}  >
                <Image source={ICONS.ic_bills}  />
                    <Text style={styles.txtServices}>Bills</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icServices} >
                <Image source={ICONS.ic_parcels}  />
                    <Text style={styles.txtServices}>Parcels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icServices} >
                <Image source={ICONS.ic_services} style={{marginTop:10}} />
                    <Text style={[styles.txtServices,{marginTop:10}]}>Services</Text>
                </TouchableOpacity>
            </Row>
        </View>
    )
}

export default ServicesHome

const styles = StyleSheet.create({
    container: {
        height: '12%',
        width: '100%',
        // backgroundColor: 'pink',
        marginTop:10,
    },
    row: {
        justifyContent: 'space-around',
    },
    icServices:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    txtServices:{
        color: '#4E4B66',
        fontSize: 14,
        fontWeight:'500'
    }
})