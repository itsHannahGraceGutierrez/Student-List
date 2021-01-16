import React, { useState, useEffect } from 'react';
import { 
   View,
   Text, 
   Alert,
   StyleSheet,
   TextInput,
   ScrollView
} from 'react-native';

import * as Colors from '../../Colors';
import * as Font from '../../Font';
import SeacrhDetails from './SeacrhDetails';
import { trancateText } from '../../Utilities';
import Button from '../Button';

import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase('UserDatabase.db');

const Seacrh = () => {

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

  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  const { user_id, user_name, user_contact, user_address } = userData;
  const data = [
    {label: 'User Id:', value: user_id },
    {label: 'User Name:', value: user_name },
    {label: 'User Contact:', value: user_contact },
    {label: 'User Address:', value: trancateText(user_address || '', 16)},
  ];

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  const Container = View;
  const Body = View;

  return (
      <Container style={styles.container}>
        <Text style={styles.title}>Search Contact List</Text>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.searcbox}
              placeholder="Enter User Id"
              onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            />

            <Button title={'Search'}icon={'search'} 
               onPress={() => searchUser()}
                style={{
                backgroundColor: Colors.INFO,
                color: Colors.FOREGROUND,
                borderRadius: 5,
                fontWeight: 'bold',
                marginTop: 10,
              }}
            />
             {
                data.map(item => (
                    <SeacrhDetails 
                        key={item.label}
                        label={item.label} 
                        value={item.value} 
                    />
                ))
            }
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
    flexDirection: 'column',
    borderWidth: 0.25,
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: Font.LARGE,
    fontWeight: 'bold',
  },
  searcbox: {
    borderWidth: 0.25,
    borderRadius: 6,
    padding: 10,
    marginTop: 20,
  },
});

export default Seacrh;