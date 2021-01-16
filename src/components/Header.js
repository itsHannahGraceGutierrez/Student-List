import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

import * as Colors from '../Colors';
import * as Font from '../Font';

const Header = (props) => {
    const { icon, title, onPressIcon } = props;
    const onPress = (typeof onPressIcon == 'function') ? onPressIcon : () => { return; };
    const Container = View;
    const Left = View;
    const Center = View;
    const Right = View;

    return(
        <Container style={styles.container}>
            <Left style={styles.left}>
                <FontAwesome5 onPress={() => onPress()}
                    name={icon}
                    size={Font.BASE * 22}
                    color={Colors.FOREGROUND}
                />
            </Left>
            <Center style={styles.center}>
                <Text style={styles.text}>{ title }</Text>
            </Center>
            <Right style={styles.right}></Right>
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.INFO,
    },
    left: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: Font.BASE * 22,
        fontWeight: 'bold',
        color: Colors.FOREGROUND,
    },
    right: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

  export default Header;