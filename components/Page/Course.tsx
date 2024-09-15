import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Image1 from '../../assets/svg/Acc_Pic';
import SearchImg from '../../assets/svg/search';
const {width} = Dimensions.get('window');
const scale = width / 320;

const Course = () => {
  const [input, setInput] = useState('');
  const [coursesData, setCoursesData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/courses');
        const data = await response.json();
        setCoursesData(data);
        setFilteredCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle the search functionality
  const handleSearch = text => {
    setInput(text);
    if (text) {
      const filtered = coursesData.filter(course =>
        course.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(coursesData);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <View style={styles.flex1}>
        <View style={styles.flex11}>
          <Text style={styles.txt1}>Course</Text>
          <Image1 size={50 * scale} />
        </View>
        <View style={styles.search}>
          <SearchImg size={15 * scale} />
          <TextInput
            style={styles.searchInput}
            value={input}
            onChangeText={handleSearch}
            placeholder="Find Course"
            placeholderTextColor={'#000000'}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.courseList}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
              <Text style={styles.errorText}>
                Error fetching courses. Please try again later.
              </Text>
            ) : filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <View key={index} style={styles.courseItem}>
                  <Text style={styles.courseName}>{course.name}</Text>
                  <Text style={styles.courseDescription}>
                    {course.description}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noResults}>No matching course found</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flex1: {
    flex: 1,
  },
  txt1: {
    color: '#000000',
    fontSize: 30 * scale,
    fontWeight: '700',
  },
  flex11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15 * scale,
    alignItems: 'center',
    marginTop: 10 * scale,
    marginVertical: 10 * scale,
  },
  search: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    marginHorizontal: 20 * scale,
    borderRadius: 10 * scale,
    alignItems: 'center',
    paddingHorizontal: 10 * scale,
    marginBottom: 20 * scale,
  },
  searchInput: {
    fontSize: 12 * scale,
    paddingHorizontal: 10 * scale,
    color: '#000000',
    flex: 1,
  },
  courseList: {
    paddingHorizontal: 20 * scale,
    marginTop: 20 * scale,
  },
  courseItem: {
    marginBottom: 20 * scale,
  },
  courseName: {
    fontSize: 18 * scale,
    fontWeight: '600',
    color: '#000000',
  },
  courseDescription: {
    fontSize: 14 * scale,
    color: '#555555',
  },
  noResults: {
    fontSize: 14 * scale,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20 * scale,
  },
  errorText: {
    fontSize: 14 * scale,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20 * scale,
  },
});
