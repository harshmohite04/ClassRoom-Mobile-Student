import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/Account(pic)'
import Home from '../../assets/svg/HomeIcon'
import Search from '../../assets/svg/SearchButton'
import Course from '../../assets/svg/course'
import Message from '../../assets/svg/MessageButton'
import Acc_pic from '../../assets/svg/Acc_ICON'
import home_dark from '../../assets/svg/Home_icon(Dark)'

const { width } = Dimensions.get('window');
const scale = width / 320;

const Account = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.AccountText}>
            <Text style={styles.StylingAccount}>
            Account
            </Text>
        </View>
        <View style={styles.ImageCard}>
        <TouchableOpacity>
        <Image1/>
        </TouchableOpacity>
        </View>
        <View style={styles.Touchables}>
            <TouchableOpacity>
                <Text style={styles.TouchablesText}>
                Favourite
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.TouchablesText}>
                Edit Account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.TouchablesText}>
                Settings and Privacy
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.TouchablesText}>
                Help
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.BottomBar}>
            <TouchableOpacity style={styles.BottomBarItem}>
                <Home />
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarItem}>
                <Course />
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarItem}>
                <Search />
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarItem}>
                <Message />
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomBarItem}>
                <Acc_pic /> 
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor : '#FFFFFF',
        paddingVertical: 25*scale
    },
    AccountText:{
     
    },
    StylingAccount: {
        fontSize: 25*scale,
        fontWeight: 'bold',
        color: '#1F1F39',
        paddingLeft : 15*scale
    },
    ImageCard: {
        marginTop: 20*scale,
        alignItems: 'center',
        justifyContent : 'center',
        marginBottom : 10 *scale
    },
    Touchables: {
        flex : 1,
        paddingTop: 20*scale,
        paddingLeft :20*scale
    },
    TouchablesText: {
        fontSize: 15*scale,
        fontWeight: 'bold',
        color : '#1F1F39',
        paddingTop :  25*scale
    },
    BottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60*scale,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingHorizontal: 10*scale
    },
    BottomBarItem: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})