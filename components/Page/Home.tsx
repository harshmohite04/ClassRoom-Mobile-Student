import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MenuLight from '../../assets/svg/MenuLight';
import Image1 from '../../assets/svg/Acc_Pic';
import RightAd from '../../assets/svg/RightAd';
import LeftAd from '../../assets/svg/LeftAd';
import AttendanceHeatmap from './AttendanceHeatmap.tsx';
import Todo from '../compo/Todo.tsx';
import Svg, {Path} from 'react-native-svg';
const {width} = Dimensions.get('window');
const scale = width / 320;

function Plus(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Svg
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 45.402 45.402"
        xmlSpace="preserve"
        stroke="#fff"
        {...props}>
        <Path d="M41.267 18.557H26.832V4.134A4.127 4.127 0 0022.707 0a4.126 4.126 0 00-4.124 4.135v14.432H4.141a4.137 4.137 0 00-4.138 4.135 4.143 4.143 0 001.207 2.934 4.122 4.122 0 002.92 1.222h14.453V41.27c0 1.142.453 2.176 1.201 2.922a4.11 4.11 0 002.919 1.211 4.13 4.13 0 004.129-4.133V26.857h14.435c2.283 0 4.134-1.867 4.133-4.15-.001-2.282-1.852-4.15-4.133-4.15z" />
      </Svg>
    </TouchableOpacity>
  );
}
const Home = () => {
  const username = 'Harsh';
  const ongoingLecture = 'DBMS';
  const upcomingLecture = 'SP';
  const [seeTodo, setSeeTodo] = useState(true);
  const [title, setTitle] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await fetch('https://example.com/api/todos'); // Replace with your API
  //       const data = await response.json();
  //       setTaskItems(data.todos);
  //     } catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   };
  //   fetchTodos();
  // }, []);

  const handleToggleTodo = () => {
    setSeeTodo(!seeTodo);
    setTitle('');
  };

  const close = () => {
    setSeeTodo(!seeTodo);
    setTitle('');
  };

  const submit = () => {
    if (title.trim()) {
      // Adding task with completion status
      setTaskItems([...taskItems, {title, completed: false}]);
      setSeeTodo(true);
      setTitle('');
      Keyboard.dismiss();
    } else {
      alert('Please enter a valid todo');
    }
  };

  const completeTask = index => {
    // Toggle completion status instead of removing the task
    const updatedItems = [...taskItems];
    updatedItems[index].completed = !updatedItems[index].completed;
    setTaskItems(updatedItems);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex1}>
        <View style={styles.flex11}>
          <MenuLight size={20 * scale} />

          <View style={styles.flex12}>
            <Text style={styles.txt1}>Hi, {username}</Text>
            <Text style={styles.txt2}>Let's start Learning</Text>
          </View>
        </View>
        <Image1 size={50 * scale} />
      </View>
      <View style={styles.flex2}>
        <View style={styles.flex21}>
          <View style={styles.leftAd}>
            <LeftAd size={75 * scale} style={styles.img1} />
            <View style={styles.leftAdI}>
              <Text style={styles.txt3}>Ongoing Lecture</Text>
              <Text style={styles.txt4}>{ongoingLecture}</Text>
            </View>
          </View>
          <View style={styles.rightAd}>
            <View style={styles.rightAdI}>
              <Text style={styles.txt3}>Upcoming Lecture</Text>
              <Text style={styles.txt4}>{upcomingLecture}</Text>
            </View>
            <RightAd size={70 * scale} style={styles.img1} />
          </View>
        </View>

        <View style={styles.todo}>
          <View style={styles.row}>
            <Text style={styles.txt5}>Today's Todo</Text>
            <Plus size={20 * scale} onPress={handleToggleTodo} />
          </View>
          {seeTodo ? (
            <ScrollView style={styles.todoList}>
              {taskItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Todo
                    key={index}
                    text={item.title}
                    completed={item.completed}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View style={styles.todoList}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Todo"
                  placeholderTextColor={'#000000'}
                  onChangeText={setTitle}
                  value={title}
                />
                <View style={styles.row1}>
                  <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={styles.txt6}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={submit}>
                    <Text style={styles.txt6}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          )}
        </View>
        <View style={styles.sliding}>
          <Text style={styles.txt1}>Sliding</Text>
        </View>
        <View style={styles.deadLine}>
          <Text style={styles.txt1}>Assignment DeadLine</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flex1: {
    flex: 2,
    backgroundColor: '#3D5CFF',
    flexDirection: 'row',
    paddingHorizontal: 10 * scale,
    paddingTop: 25 * scale,
    justifyContent: 'space-between',
    paddingVertical: 30 * scale,
  },
  flex2: {
    flex: 9,
    paddingVertical: 10 * scale,
  },
  flex22: {
    flexDirection: 'row',
  },
  txt1: {
    fontSize: 27 * scale,
    fontWeight: '800',
    color: '#ffffff',
  },
  txt2: {
    fontSize: 14 * scale,
    fontWeight: '400',
    color: '#ffffff',
  },
  flex11: {
    flexDirection: 'row',
  },
  flex12: {
    paddingHorizontal: 15 * scale,
  },
  flex21: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftAd: {
    width: '45%',
    backgroundColor: '#CEECFE',
    height: 70 * scale,
    marginHorizontal: 3 * scale,
    borderRadius: 10 * scale,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightAd: {
    width: '45%',
    backgroundColor: '#EFE0FF',
    height: 70 * scale,
    marginHorizontal: 3 * scale,
    borderRadius: 10 * scale,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftAdI: {
    height: '55%',
    width: '60%',
    backgroundColor: '#F3FBFF',
    borderTopLeftRadius: 8 * scale,
    borderBottomLeftRadius: 8 * scale,
    alignSelf: 'center',
  },
  rightAdI: {
    height: '55%',
    width: '60%',
    backgroundColor: '#F3FBFF',
    borderTopRightRadius: 8 * scale,
    borderBottomRightRadius: 8 * scale,
    alignSelf: 'center',
  },
  txt3: {
    color: '#000000',
    fontSize: 10 * scale,
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign: 'center',
  },
  txt4: {
    color: '#000000',
    fontSize: 20 * scale,
    fontWeight: '500',
    textAlign: 'center',
  },
  img1: {
    // alignSelf:'flex-end'
    alignSelf: 'center',
  },
  todo: {
    width: '90%',
    height: 200 * scale,
    backgroundColor: '#000000',
    alignSelf: 'center',
    borderRadius: 10 * scale,
    marginTop: 10 * scale,
    padding: 10 * scale,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  todoList: {
    backgroundColor: '#252527',
    borderRadius: 10 * scale,
    marginTop: 10 * scale,
    width: '95%',
    alignSelf: 'center',
    padding: 5 * scale,
    height: 100 * scale,
  },
  txt5: {
    color: '#ffffff',
    fontSize: 20 * scale,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10 * scale,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginTop: 7 * scale,
    paddingHorizontal: 10 * scale,
  },
  btn: {
    width: '40%',
    height: 25 * scale,
    backgroundColor: '#1f6feb',
    alignSelf: 'center',
    marginTop: 10 * scale,
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt6: {
    color: '#ffffff',
    fontSize: 15 * scale,
    fontWeight: '600',
  },
  sliding: {
    width: '90%',
    height: 50 * scale,
    backgroundColor: '#000000',
    alignSelf: 'center',
    borderRadius: 10 * scale,
    marginTop: 5 * scale,
  },
  deadLine: {
    width: '90%',
    height: 50 * scale,
    backgroundColor: '#000000',
    alignSelf: 'center',
    borderRadius: 10 * scale,
    marginTop: 5 * scale,
  },
});
