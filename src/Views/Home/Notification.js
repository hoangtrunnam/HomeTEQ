import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../../Components/Row'
import { ICONS } from '../../Constants/Icons'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Row style={styles.row}>
                <Image source={ICONS.ic_notiHome} style={{marginTop:25}} />
                <View style={styles.txtContainer}>
                    <Text style={styles.txtnoti}>Facilities Booking </Text>
                    <Text style={[styles.txtnoti, styles.txtDescriptionNoti]} numberOfLines={2}>Meeting room, Fitness class, Co-kitchen etc  hoafng trung nam đã ghé thăm nơi này, click vào ngay để biết kết quả</Text>
                </View>
            </Row>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        height: '20%',
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: 50,
        borderRadius: 12,
    },
    row:{
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red'

    },
    txtContainer: {
        height: '60%',
        width: '70%',
        justifyContent: 'space-around',
        paddingRight:35
        // backgroundColor: 'red'
    },
    txtnoti: {
        color: '#14142B',
        fontSize: 16,
        fontWeight: '600',
    },
    txtDescriptionNoti: {
        color: '#6E7191',
        fontSize: 13,
        fontWeight: '400',
    }
})