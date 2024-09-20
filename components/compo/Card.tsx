import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
import Go_right from '../../assets/svg/Go_right'

const {width} = Dimensions.get('window');
const scale = width / 320;

export default function Card() {
  return (
    <View style={styles.CardContainer}>
        <View>
            <Text>
                Title
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    CardContainer: {
        height : '50%',
        width : '95%',
        marginTop : 10 *scale,
        marginLeft : 10 * scale ,
        backgroundColor : '#d4ffea',
        borderRadius: 20 * scale,
    }
})