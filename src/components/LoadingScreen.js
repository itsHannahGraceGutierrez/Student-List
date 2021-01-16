// LoadingScreen.js must be inside ./src/components folder

import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
 } from 'react-native';
 import { FontAwesome5 } from '@expo/vector-icons';

 import * as Colors from '../Colors';
import * as Font from '../Font';

const LoadingScreen = () => {
  const Container = View;
  const Body = View;
  const Logo = View;
  return (
    <Container style={styles.container}>
        <Body style={styles.body}>
          <Logo>
            <Text style={{ textAlign: 'center' }}>
              <FontAwesome5 name={'get-pocket'} 
                size={Font.BASE * 130}
                color={Colors.INFO} 
              />
            </Text>
            <Text style={styles.loadingText}>Loading screen...</Text>
            </Logo>
          </Body>
        <View style={styles.bottomPadding}>
          </View>
    </Container>
  )
}

  const styles = StyleSheet.create({
      container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: 'column',
      },
      body: {
        flex: 0.9,
        justifyContent: 'center',
      },
      loadingText: {
          fontSize: Font.MEDIUM,
          color: Colors.INFO,
          textAlign: 'center',
      },
      bottomPadding: {
        flex: 0.1
      }
  })


export default LoadingScreen;