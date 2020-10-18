import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export default function ListElement({text, details, checked, boldText, checkBoxColor, smallText, listElementBackground}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(checked);

  const styles = StyleSheet.create({
    ListElement: {
      backgroundColor: listElementBackground,
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
      color: boldText,
    },
    details: {
      color: smallText,
    }
  });

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
        tintColors={{'true': checkBoxColor, 'false': '#aaaaaa'}}
      />
    </View>
  );
}

