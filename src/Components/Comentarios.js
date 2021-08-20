import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Gravatar} from 'react-native-gravatar'

export default class Comentarios extends Component{

    render(){
        let todoscomentarios = null
        if(this.props.comentarios)
            todoscomentarios = this.props.comentarios.map((item, index) =>{
                return(
                    <View key={index} style={estilo.containercomentarios}>
                        <Text style={estilo.login}>{item.login}: </Text>
                        <Text style={estilo.texto}>{item.comentario}</Text>
                    </View>
                )
            })

        return(
            <View style={estilo.container}>
                {todoscomentarios}
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    containercomentarios:{
        flexDirection:'row'
        
    },
    login:{
        fontWeight:'bold'
    },
    texto:{
        color:'#555'
    }
}) 