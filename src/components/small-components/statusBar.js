import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const checkIcon = <Feather name="check-circle" size={50} color="#fff" />;
const addIcon = <Ionicons name="ios-add-circle-outline" size={55} color="#fff" />;

export default function StatusBar() {
  return (
    <View style={styles.statusBar}>
      {checkIcon}
      {addIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
  },
});
