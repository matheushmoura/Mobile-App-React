import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Gravatar} from 'react-native-gravatar'

export default class Autor extends Component{

    render(){
        return(
            <View style={estilo.container}>
                <Gravatar style={estilo.avatar} options={{email:this.props.email, secure:true}}></Gravatar>
                <Text style={estilo.texto}>{this.props.nome }</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        marginHorizontal:10,
        borderRadius:50
    },
    texto:{
        color:'#555',
        marginVertical:10
    }
}) 