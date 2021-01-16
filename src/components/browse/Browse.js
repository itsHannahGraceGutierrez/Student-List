import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import * as Colors from '../../Colors';
import Header from '../Header';
import Seacrh from './Search';

const Browse = (props) => {
    const { style, state, methods } = props;
    const Container = View;
    const Body = View;

    return(
        <Container style={[styles.container, style]}>
            <View style={styles.header}>
                <Header icon={'search'}
                    title={'Browse'}
                />
            </View>
            <Body style={styles.body}>
                <Seacrh />
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
    },
    body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
    }
});

export default Browse;