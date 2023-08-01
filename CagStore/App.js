import React from 'react';
import { SafeAreaView,Text,StyleSheet, FlatList, TextInput} from 'react-native';
import Card from './src/components/card';
import Data from './data.json';


function App(){

  const renderProduct = ({item}) => <Card products = {item}/>
  return (
    <SafeAreaView style = {styles.container}>
      <FlatList 
      numColumns={2}
      ListHeaderComponent={
        <>
          <Text style={styles.header_style}>CAGSTORE</Text><TextInput
          style={styles.search_bar_style}
          placeholder='Ara...' />
        </>
      }
        keyExtractor={(item) => item.id.toString()}
        data={Data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container : {
    flex: 1,

  },
  header_style: {
    color: 'purple',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10,
  },
  search_bar_style: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    margin: 10,
  },
});

export default App;