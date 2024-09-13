import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

// Sample attendance data for a semester (adjust as needed)

const attendanceData = [
  // September Data
  { date: '2024-09-01', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-09-02', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-09-03', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-04', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-09-05', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-09-06', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-09-07', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-08', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-09-09', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-09-10', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-11', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-09-12', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-09-13', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-14', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-09-15', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-09-16', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-09-17', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-09-18', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-09-19', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-20', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-09-21', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-09-22', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-09-23', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-09-24', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-09-25', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-26', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-09-27', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-09-28', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-09-29', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-09-30', lecturesAttended: 3, totalLectures: 5 },

  // October Data
  { date: '2024-10-01', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-10-02', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-10-03', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-04', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-10-05', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-10-06', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-10-07', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-08', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-10-09', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-10-10', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-10-11', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-12', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-10-13', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-14', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-10-15', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-10-16', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-10-17', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-10-18', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-10-19', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-20', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-10-21', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-10-22', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-10-23', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-10-24', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-10-25', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-26', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-10-27', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-10-28', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-10-29', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-10-30', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-10-31', lecturesAttended: 2, totalLectures: 5 },


  { date: '2024-11-01', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-11-02', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-11-03', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-04', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-11-05', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-11-06', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-11-07', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-08', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-11-09', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-11-10', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-11-11', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-12', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-11-13', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-14', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-11-15', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-11-16', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-11-17', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-11-18', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-11-19', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-20', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-11-21', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-11-22', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-11-23', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-11-24', lecturesAttended: 0, totalLectures: 5 },
  { date: '2024-11-25', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-26', lecturesAttended: 1, totalLectures: 5 },
  { date: '2024-11-27', lecturesAttended: 2, totalLectures: 5 },
  { date: '2024-11-28', lecturesAttended: 4, totalLectures: 5 },
  { date: '2024-11-29', lecturesAttended: 5, totalLectures: 5 },
  { date: '2024-11-30', lecturesAttended: 3, totalLectures: 5 },
  { date: '2024-11-31', lecturesAttended: 2, totalLectures: 5 }
];


const AttendanceGrid = () => {
  const [currentMonth, setCurrentMonth] = useState('2024-09'); // Start with September as default

  // Filter data based on current month (e.g., '2024-09' for September)
  const filteredData = attendanceData.filter((item) => item.date.startsWith(currentMonth));

  // Group data into chunks (for rows)
  const getChunkedData = (data, chunkSize) => {
    const chunked = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      chunked.push(data.slice(i, i + chunkSize));
    }
    return chunked;
  };

  // Set number of columns per row
  const columnsPerRow = 7; // 7 days per week

  // Get the current month name from the selected month
  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <View style={styles.container}>
      {/* Month Header */}
      <Text style={styles.monthText}>
        {getMonthName(`${currentMonth}-01`)}
      </Text>

      <ScrollView horizontal>
        <View style={styles.gridWrapper}>
          {getChunkedData(filteredData, columnsPerRow).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.gridRow}>
              {row.map((item, index) => {
                // Calculate attendance ratio to determine color
                const attendanceRatio = item.lecturesAttended / item.totalLectures;
                let backgroundColor = '#e0e0e0'; // Default gray for not attended (0)
                if (attendanceRatio === 1) backgroundColor = '#004d00'; // Dark green for full attendance
                else if (attendanceRatio >= 0.7) backgroundColor = '#66ff66'; // Light green for high attendance
                else if (attendanceRatio >= 0.4) backgroundColor = '#ccffcc'; // Lighter green for moderate attendance
                else if (attendanceRatio > 0) backgroundColor = '#e6ffe6'; // Very light green for low attendance

                return (
                  <View key={index} style={[styles.gridItem, { backgroundColor }]}>
                    <Text style={styles.gridItemText}>
                      {item.lecturesAttended}/{item.totalLectures}
                    </Text>
                  </View>
                );
              })}
            </View>
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  gridWrapper: {
    flexDirection: 'row', // Ensure horizontal layout
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  gridItem: {
    width: 50,
    height: 50,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemText: {
    color: '#000',
  },
});

export default AttendanceGrid;
