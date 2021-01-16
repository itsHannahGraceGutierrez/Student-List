import React from 'react';
import { 
    StyleSheet,
    View,
    Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as Colors from '../../Colors';
import Header from '../Header';
import NewCreate from './NewCreate';

const Create = (props) => {
    const { style, methods, state } = props;
    const Container = View;
    const Body = View;

    return(
        <Container style={[style, styles.container]}>
            <StatusBar />
            <View style={styles.header}>
                <Header icon={'pen'} title={'NEW CONTACT'} />
            </View>
            <Body style={styles.body}>
                <NewCreate />
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
        flex: 0.15,
        backgroundColor: 'green',
    },
    body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: Colors.DEFAULT,
    }
});

export default Create;