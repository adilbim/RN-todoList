import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './small-components/statusBar';

export default function Header({changeColorTheme ,foreground, istElementBackground}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: foreground,
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
      color: istElementBackground,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>To-dos</Text>
      <StatusBar changeColorTheme={changeColorTheme} />
    </View>
  );
}

