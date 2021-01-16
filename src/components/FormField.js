import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import * as Colors from '../Colors';
import * as Font from '../Font';


const FormField = (props) => {
    let { style, title, inputComponent } = props;
    let {
        fontSize,
        fontWeight,
        color, 
        padding,
    } = style || { };
    fontSize = fontSize || Font.SMALL;
    fontWeight = fontWeight || 'normal';
    color = color || Colors.TEXT;
    padding = padding || 10;

    const FormField = View;
    const LabelContainer = View;
    const InputContainer = View;

    return (
        <FormField style={styles.container}>
            <LabelContainer style={[
                    { padding },
                    styles.labelContainer
                ]}>
                <Text style={{ 
                        fontSize, 
                        fontWeight, 
                        color 
                    }}>{ title }</Text>
            </LabelContainer>
            <InputContainer style={styles.inputContainer}>
                { inputComponent }
            </InputContainer>
        </FormField>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    labelContainer: {
        flex: 0.4,

    },
    inputContainer: {
        flex: 0.6,
 
    },
   
});

export default FormField;