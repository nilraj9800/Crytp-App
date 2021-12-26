import React from "react"
import {searchBar} from 'react-native';
import {View,TextInput,StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
        <View style = {styles.container}>
            <TextInput placeholder="Search here" label="Search" source="name" alwaysOn/>
        </View>

       
      
    )
  }

const styles = StyleSheet.create({
    container : {
        width:"100 %",
        height:50,
        backgroundColor:'white',
        borderRadius:8
        
    }
})
      
export default SearchBar;
