import React, { useReducer } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './src/components/header';
import ListElement from './src/components/small-components/listElement';

const light = {
  foreground: '#f6984a',
  background: '#e8ebf5',
  boldText: '#000',
  smallText: '#a2a4ab',
  listElementBackground: '#fff',
  checkBoxColor: '#f6984a',
};
const dark = {
  foreground: '#7289DA',
  background: '#23272A',
  boldText: '#fff',
  smallText: '#99aab5',
  listElementBackground: '#2c2f33',
  checkBoxColor: '#7289DA',
};

function themeReducer(state, action) {
  switch (action.type) {
    case 'dark':
      return dark;
    case 'light':
      return light;
    default:
      throw new Error('An error was occured while changing the theme colors.');
  }
}

export default function App() {
  const [themeColors, dispatch] = useReducer(themeReducer, light);

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
      paddingBottom: 20,
    },
    scrollView: {
      padding: 20,
      height: 50,
    }
  });

  const todos = listElements.map((elm, i) => (<ListElement key={i} {...elm} {...themeColors} />))
  return (
    <View style={styles.container}>
      <Header {...themeColors} changeColorTheme={dispatch} />
      <ScrollView style={styles.scrollView}>
        {todos}
      </ScrollView>
    </View>
  );
}

