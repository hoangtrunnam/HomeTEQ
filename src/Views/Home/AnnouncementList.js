import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../../Components/Row'
import { ICONS } from '../../Constants/Icons'

const AnnouncementList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Power outage announcemen</Text>
      <Text style={[styles.txtTitle, styles.txtdescription]} numberOfLines={2} fontweight= {600}>PowerThe Metropolitan Electricity Authority will temporarily cut off the power for...</Text>
      <Row style={{ justifyContent: 'space-around' }}>
        <Row>
          <Image source={ICONS.ic_avatar} />
          <Text style={[styles.txtTitle, styles.txtAuthor]}>Ralph Edwards</Text>
        </Row>
        <Text style={styles.txtAuthor}>12 Jan, 2021</Text>

      </Row>
    </View>
  )
}

export default AnnouncementList

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    // width: '100%',
    width: 280,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop:15,
    justifyContent: 'space-around',
    paddingLeft:10,
    paddingRight:10,
    marginRight: 15,
    // backgroundColor: 'red'

  },
  txtTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#14142B',
    lineHeight: 20,
  },
  txtdescription: {
    color: '#4E4B66',
    fontSize: 14,
    
    lineHeight: 20,
    

  },
  txtAuthor:{
    fontWeight: '400',
    color: '#14142B',
  }

})