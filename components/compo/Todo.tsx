import {Dimensions, StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

import Svg, {Path} from 'react-native-svg';
const {width} = Dimensions.get('window');
const scale = width / 320;
const Todo = (props) => {
  return (
    <View style={styles.task}>
      <View style={styles.row1}>
        <View
          style={[
            styles.check,
            props.completed ? styles.checkCompleted : null,
          ]}>
          {props.completed && (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={10 * scale}
              height={10 * scale}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <Path d="M5 13l4 4L19 7" />
            </Svg>
          )}
        </View>
        <Text
          style={[
            styles.txt2,
            props.completed ? styles.completedText : null,
          ]}>
          {props.text}
        </Text>
      </View>
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
  checkCompleted: {
    backgroundColor: '#9382fc',
  },
  txt2: {
    color: '#ffffff',
    fontSize: 13 * scale,
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
  row1: {
    flexDirection: 'row',
  },
  task: {
    marginVertical: 5 * scale,
  },
});

