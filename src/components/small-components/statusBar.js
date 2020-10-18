import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

export default function StatusBar({changeColorTheme}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleThemeColor() {
    changeColorTheme({type: !isDarkMode ? 'dark' : 'light'});
    setIsDarkMode(!isDarkMode);
  }

  const checkIcon = <Feather name="check-circle" size={45} color="#fff" />;
  const sunIcon =
    <Ionicons
        name="weather-sunny" 
        size={45} 
        color="#fff" 
        onPress={() => toggleThemeColor()}
    />;
  const moonIcon =
    <FontAwesomeIcons
       name="moon-o" 
       size={45} 
       color="#fff"
       onPress={() => toggleThemeColor()}
    />;
  const modeIcon = isDarkMode ? sunIcon : moonIcon;

  return (
    <View style={styles.statusBar}>
        {checkIcon}
        {modeIcon}
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
