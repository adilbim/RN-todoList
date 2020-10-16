import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export default function ListElement({text, details, checked}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(checked);
  return (
    <View style={styles.ListElement}>
      <View>  
        <Text style={styles.listText}>{text}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
      <CheckBox 
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(!toggleCheckBox)}
        tintColors={{'true': '#f6984a', 'false': '#aaaaaa'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ListElement: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  listText: {
    fontWeight: 'bold',
  },
  details: {
    color: '#a2a4ab',
  }
});
