import { StyleSheet, Text, View, TouchableOpacity, Dimensions, useColorScheme } from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/Account(pic)'
import Home from '../../assets/svg/HomeIcon'
import Search from '../../assets/svg/SearchButton'
import Course from '../../assets/svg/course'
import Message from '../../assets/svg/MessageButton'
import Acc_pic from '../../assets/svg/Acc_ICON'
import home_dark from '../../assets/svg/Home_icon(Dark)'
import Course_dark from '../../assets/svg/Course_icon(Dark)'
import Search_dark from '../../assets/svg/Search_button(dark)'
import Message_dark from '../../assets/svg/Message_button(Dark)'
import Account_dark from '../../assets/svg/Acc_icon(dark)'

const { width } = Dimensions.get('window');
const scale = width / 320;

const lightTheme = {
    backgroundColor: '#FFFFFF',
    textColor: '#1F1F39',
    bottomBarBackground: '#FFFFFF',
    bottomBarBorderColor: '#DDD',
};

const darkTheme = {
    backgroundColor: '#1F1F39',
    textColor: '#FFFFFF',
    bottomBarBackground: '#1F1F39',
    bottomBarBorderColor: '#333',
};

const Account = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;

    const HomeIcon = isDarkMode ? home_dark : Home;
    const CourseIcon = isDarkMode ? Course_dark : Course;
    const SearchIcon = isDarkMode ? Search_dark : Search;
    const MessageIcon = isDarkMode ? Message_dark : Message;
    const AccIcon = isDarkMode ? Account_dark : Acc_pic;

    return (
        <View style={[styles.Container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.AccountText}>
                <Text style={[styles.StylingAccount, { color: theme.textColor }]}>
                    Account
                </Text>
            </View>
            <View style={styles.ImageCard}>
                <TouchableOpacity>
                    <Image1 />
                </TouchableOpacity>
            </View>
            <View style={styles.Touchables}>
                <TouchableOpacity>
                    <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
                        Favourite
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
                        Edit Account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
                        Settings and Privacy
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.TouchablesText, { color: theme.textColor }]}>
                        Help
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.BottomBar, { backgroundColor: theme.bottomBarBackground, borderTopColor: theme.bottomBarBorderColor }]}>
                <TouchableOpacity style={styles.BottomBarItem}>
                    <HomeIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomBarItem}>
                    <CourseIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomBarItem}>
                    <SearchIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomBarItem}>
                    <MessageIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomBarItem}>
                    <AccIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Account

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingVertical: 25 * scale
    },
    AccountText: {},
    StylingAccount: {
        fontSize: 25 * scale,
        fontWeight: 'bold',
        paddingLeft: 15 * scale
    },
    ImageCard: {
        marginTop: 20 * scale,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10 * scale
    },
    Touchables: {
        flex: 1,
        paddingTop: 20 * scale,
        paddingLeft: 20 * scale
    },
    TouchablesText: {
        fontSize: 15 * scale,
        fontWeight: 'bold',
        paddingTop: 25 * scale
    },
    BottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60 * scale,
        borderTopWidth: 1,
        paddingHorizontal: 10 * scale
    },
    BottomBarItem: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
