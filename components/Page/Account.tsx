import { StyleSheet, Text, View, TouchableOpacity, Dimensions, useColorScheme } from 'react-native'
import React from 'react'
import Image1 from '../../assets/svg/Acc_Pic'

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


    return (
        <View style={[styles.Container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.AccountText}>
                <Text style={[styles.StylingAccount, { color: theme.textColor }]}>
                    Account
                </Text>
            </View>
            <View style={styles.ImageCard}>
                <TouchableOpacity>
                    <Image1 size={120*scale}/>
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
