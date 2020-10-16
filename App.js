import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './src/components/header';
import ListElement from './src/components/small-components/listElement';

export default function App() {
  const listElements = [{
    text: 'Code',
    details: 'work',
    checked: true,
  }, {
    text: 'Eat',
    details: '3 meals a day',
    checked: false,
  }, {
    text: 'Sleep',
    details: 'do not pass midnight',
    checked: false,
  }]
  const todos = listElements.map((elm, i) => (<ListElement key={i} {...elm} />))
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        {todos}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ebf5',
    paddingBottom: 20,
  },
  scrollView: {
    padding: 20,
    height: 50,
  }
});
