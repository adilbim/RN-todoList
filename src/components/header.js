import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './small-components/statusBar';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>To-dos</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6984a',
    height: '30%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'space-between',
    padding: '7%',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#fff',
  }
});
