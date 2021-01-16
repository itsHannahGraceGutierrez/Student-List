import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import * as Colors from '../../Colors';
import Header from '../Header';

const Account = (props) => {
    const { state, methods } = props;
    const { style } = props;
    
    const Container = View;
    const Body = ScrollView;

    return (
        <Container style={[ style, styles.container ]}> 
            <StatusBar />
            <View style={styles.header}>
                <Header 
                    title={'ACCOUNT'}
                    icon={'user'}  
                />
            </View>
            <Body style={styles.body}>
                <Text>Hello World</Text>
            </Body>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.DEFAULT,
      flexDirection: 'column',
    },
    header: {
        flex: 0.2,
        backgroundColor: Colors.SUCCESS,
      },
      body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
      },
});

export default Account;

