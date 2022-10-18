import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Row from '../../Components/Row'
import { ICONS } from '../../Constants/Icons'

const SelectDepartment = () => {
    return (
        <View style={styles.containerHouseName}>
            <Row style={styles.rowContainer}>
                <Image source={ICONS.ic_home_selectDepartment} />
                <View>
                    <Text style={{fontSize:16,fontWeight:'600',color:'#14142B'}}>Home R401</Text>
                    <Text style={{fontSize:14,fontWeight:'400',color:'#6E7191'}}>64 members</Text>

                </View>
                <TouchableOpacity style={styles.icChevronDown}>
                    <Image source={ICONS.ic_chevron_down} style={styles.ic_chevron_down} />
                </TouchableOpacity>
            </Row>
        </View>
    )
}

export default SelectDepartment

const styles = StyleSheet.create({
    containerHouseName: {
        height: '90%',
        width: '50%',
        backgroundColor: '#FCE3EC',
        borderRadius: 56,
        justifyContent: 'center',
    },
    rowContainer: {
        justifyContent: 'space-around'

    },
    icChevronDown:{
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    ic_chevron_down:{
        // height: 10,
        // width: 10,
    },
})