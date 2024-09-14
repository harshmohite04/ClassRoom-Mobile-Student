import {Dimensions, StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Plus from '../../assets/svg/Plus';
const {width} = Dimensions.get('window');
const scale = width / 320;
const Todo = props => {
  return (
    <View style={styles.task}>
      <View style={styles.row1}>
        <View style={styles.check}></View>
        <Text style={styles.txt2}>{props.text}</Text>
      </View>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  check: {
    width: 10 * scale,
    height: 10 * scale,
    borderColor: '#9382fc',
    borderWidth: 1,
    borderRadius: 10 * scale,
    marginRight: 5 * scale,
    alignSelf: 'center',
  },
  txt2: {
    color: '#ffffff',
    fontSize: 13* scale,
    fontWeight:'500'
  },
  row1: {
    flexDirection: 'row',
  },
  time: {
    color: '#ffffff',
    marginLeft: 20 * scale,
    fontSize: 10 * scale,
    fontWeight:'500'
  },
  task: {
    marginVertical:5*scale
  },
});
