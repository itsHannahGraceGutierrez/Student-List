import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  import * as Font from '../../Font';
  import * as Colors from '../../Colors';

  const SearhDetails = (props) => {
      const { label, value } = props;
        const Container = View;
        const Label = View;
        const Value = View;

      return (
        <Container style={styles.container}>
            <Label style={styles.label}>
                <Text style={styles.labelText}>{ label }</Text>
            </Label>
            <Value style={styles.value}>
                <Text style={styles.valueText}>{ value }</Text>
            </Value>
        </Container>
      );
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
    },
    label: {
        flex: 0.4,
        padding: 10,
        borderWidth: 0.25,
        borderColor: Colors.DEFAULT,
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: Font.SMALL,
    },
    value: {
        flex: 0.6,
        padding: 10,
        borderWidth: 0.25,
        borderColor: Colors.DEFAULT,
    },
    valueText: {
        fontSize: Font.SMALL,
    },
});

export default SearhDetails;