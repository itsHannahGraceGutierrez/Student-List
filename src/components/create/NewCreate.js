import React, { useState, useEffect } from 'react';

import { 
   View,
   Text, 
   ScrollView, 
   Alert,
   StyleSheet,
   TextInput
} from 'react-native';

import * as Colors from '../../Colors';
import * as Font from '../../Font';

import Button from '../Button';
import FormField from '../FormField';

import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase('UserDatabase.db');

const NewCreate = () => {
  
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS table_user(
                  user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                  user_name VARCHAR(20), 
                  user_contact INT(10), 
                  user_address VARCHAR(255))`,
              []
            );
          }
        }
      );
    });
  }, []);

  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let clear = () => {
    setUserName(null);
    setUserContact(null);
    setUserAddress(null);
  }

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName || !userContact || !userAddress) {
      Alert.alert('Empty or more field!..');
      return;
    } else if(isNaN(userContact)) {
      Alert.alert('Contact number is not String!..');
      return;
    }

  db.transaction(function (tx) {
    tx.executeSql(
      `INSERT INTO table_user (
          user_name, 
          user_contact, 
          user_address
          ) VALUES (?,?,?)`,
      [userName, userContact, userAddress],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            clear(),
            [
              {
                text: 'Ok',
              },
            ],
            { cancelable: false }
          );
        } else Alert.alert('Registration Failed');
      }
    );
  });
};


const Container = View;
const TextConatiner = View;
const Footer=View;

  return (
    <Container style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <TextConatiner style={styles.textbox}>
            <FormField title={'Name:'}
                style={{ fontWeight: 'bold' }}
                inputComponent={(
                    <TextInput style={styles.textBox}
                      value={userName} 
                      onChangeText={(userName) => setUserName(userName)}
                    />
                )}
            />
            <FormField title={'Contact No:'}
                style={{ fontWeight: 'bold' }}
                inputComponent={(
                    <TextInput style={styles.textBox}
                      value={userContact} 
                      onChangeText={(userContact) => setUserContact(userContact)}
                    />
                )}
            />
            <FormField title={'Enter Address:'}
                style={{ fontWeight: 'bold' }}
                inputComponent={(
                    <TextInput style={[styles.textBox, {textAlignVertical: 'top', padding: 9}]}
                      value={userAddress} 
                      onChangeText={(userAddress) => setUserAddress(userAddress)}
                      maxLength={225}
                      numberOfLines={5}
                      multiline={true}
                    />
                )}
            />
              <Footer style={styles.footer}>
                 <Button title={'Clear'} icon={'minus'} 
                    onPress={() => clear('')}
                    style={{
                        backgroundColor: Colors.DANGER,
                        color: Colors.FOREGROUND,
                        borderRadius: 5,
                        fontWeight: 'bold',
     
                    }}
                />
                <Button title={'Save'} icon={'save'} 
                    onPress={() => register_user()}
                    style={{
                        backgroundColor: Colors.INFO,
                        color: Colors.FOREGROUND,
                        borderRadius: 5,
                        fontWeight: 'bold',
                        marginRight: 25,
                    }}
                />
              </Footer>
            </TextConatiner>
          </ScrollView>
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          Copy Right Neust Bsit-3B
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 14,
        borderRadius: 5,
        flexDirection: 'column',
        borderWidth: 0.25,
    },
    textBox: {
        marginTop: 17,
        borderWidth: 0.25,
        borderRadius: 5,
        fontSize: Font.SMALL,
        padding: 10,
    },
    footer: {
        paddingVertical: 10,
        flexDirection: 'row-reverse'
    }
});


export default NewCreate;
