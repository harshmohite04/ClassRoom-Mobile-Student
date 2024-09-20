import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Go_right from '../../assets/svg/Go_right';

const {width} = Dimensions.get('window');
const scale = width / 320;

export default function Card() {
  return (
    <View style={styles.CardContainer}>
        <View style={styles.TextContainer}>
            <View style={styles.TextBlock}>
                <Text style={styles.TitleText}>
                    Title:
                </Text>
                <Text style={styles.DescriptionText}>
                    Description: 
                </Text>
            </View>
            <TouchableOpacity>
                <Go_right  size={40 * scale} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    CardContainer: {
        height: '50%',
        width: '90%',
        marginTop: 20 * scale,
        marginHorizontal: '5%',
        backgroundColor: '#d4ffea',
        borderRadius: 20 * scale,
        padding: 15 * scale,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity :1.0,
        shadowRadius: 8,
        elevation: 4,
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextBlock: {
        flexDirection: 'column',
    },
    TitleText: {
        fontSize: 15 * scale,
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 8 * scale,
    },
    DescriptionText: {
        fontSize: 10 * scale,
        color: '#333',
        lineHeight: 22 * scale,
    }
});
