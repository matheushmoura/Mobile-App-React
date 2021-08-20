import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Placa extends Component{

    render(){
        return(

            <View style={estilo.container}>
                <Text style={estilo.texto}>AZA-1234</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    texto:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        textAlign:'center',
        marginLeft: '37%'
    }
}) 