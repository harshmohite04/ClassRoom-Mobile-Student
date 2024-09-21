import { StyleSheet, Text, View,TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import Go_back from '../../assets/svg/Go_baack_Arrow'
import Card from '../compo/Card'
const {width} = Dimensions.get('window');
const scale = width / 320;

const Notice = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={
          () => {
            navigation.push('Home')
          }
        }>
          <Go_back size={30 * scale}/>
        </TouchableOpacity>
        <Text style={styles.TextContainer}>
          Notice Board
        </Text>
      </View>
      <View style={styles.subcontainer}>
      <Text style={styles.listText}>
        Notificarion List
      </Text>
      <View style={styles.cardContiner}>
        <Card/>
      </View>
      </View>
    </View>
  )
}

export default Notice

const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor : '#FFFFFF'
    },
    navbar: {
      flexDirection : 'row',
      backgroundColor: '#3D5CFF',
      borderBottomStartRadius: 10 *scale,
      paddingHorizontal : 10 *scale,
      paddingVertical: 20 *scale
    },
    TextContainer :{
      color : '#FFFFFF',
      alignSelf : 'center',
      paddingLeft : 15 * scale,
      fontSize: 20 * scale ,
      fontWeight : 'bold'
    },
    subcontainer :{
      paddingVertical : 10*scale
    },
    listText :{
      paddingLeft : 10 *scale,
      color : '#3D5CFF',
      fontSize : 18*scale,
      fontWeight: 'bold'
    },
    cardContiner:{

    }
})