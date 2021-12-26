import React from 'react'
import { View,StyleSheet,Text} from 'react-native'

export default class Header extends React.Component {

    render() {
        return(
            <View style = {styles.header}>
                
                <Text>Header </Text>

            </View>
        )
            
        }
    }

const styles= StyleSheet.create({
    header:{
        width :'100%',
        height:'15%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    }

});
     
        
