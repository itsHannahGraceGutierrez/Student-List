
import React, { useState, useEffect } from 'react';

import { 
   View,
   Text, 
   SafeAreaView, 
   FlatList
} from 'react-native';

import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase('UserDatabase.db');

const ListView = (props) => {

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

  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{ 
          height: 0.2, 
          width: '100%', 
          backgroundColor: '#808080' 
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Contact: {item.user_contact}</Text>
        <Text>Address: {item.user_address}</Text>
        <Text>______________________________________________</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
     <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            Copy Right Neust BSIT-3B
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ListView;
