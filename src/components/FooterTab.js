import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import * as Font from '../Font';
import * as Colors from '../Colors';

const FooterTab = (props) => {
  const { state, goTo } = props;
  const { currentScreen } = state;
 
  const screens = [
    { screen: 'home',    icon: 'home',   },
    { screen: 'create',  icon: 'pen',   },
    { screen: 'browse',  icon: 'search', },
    { screen: 'account', icon: 'user',   },
  ];

  return (
    <FlatList style={styles.container}
      horizontal={true}
      data={screens}
      keyExtractor={(item, index) => (item.screen + index)}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => goTo(item.screen)}
          style={
            (item.screen == currentScreen) 
            ? [ styles.section, { backgroundColor: Colors.WHITE }]
            : styles.section
          }>
          <FontAwesome5 
            name={item.icon}
            color={
              (item.screen == currentScreen) 
              ? Colors.INFO 
              : Colors.WHITE
            }
            size={Font.LARGE}
          />
        </TouchableOpacity>
      )}
    />
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.25,
    backgroundColor: Colors.INFO,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.25,
    width: (width / 4),
  },
});

export default FooterTab;