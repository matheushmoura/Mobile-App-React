import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Gravatar} from 'react-native-gravatar'
import  Icon  from 'react-native-vector-icons/FontAwesome'

export default class Register extends Component{
    sair=()=>{
        this.props.navigation.navigate('Login')
    }
    render(){
        return(
            <View style={estilo.container}>
                <Gravatar style={estilo.avatar} options={{email:this.props.email, secure:true}}></Gravatar>
                <Text style={estilo.texto}>{this.props.nome }</Text>
                <Text style={estilo.texto}>{this.props.email }</Text>
                <TouchableOpacity style={estilo.button} onpress={this.sair}>
                    <View style={estilo.viewButton}>
                        <Icon name="close" color="#FFF"></Icon>
                        <Text style={estilo.textoButton}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
       
        alignItems:'center'
    },
    avatar:{
        marginHorizontal:10,
        borderRadius:15,
        marginTop:50
    },
    texto:{
        color:'#555',
        marginVertical:10,
        marginTop:20
    },
    textoButton:{
        color:'#FFF',
        marginVertical:10,
        marginTop:10,
        fontSize:20,
        marginLeft:5
    },
    button:{
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'#08C',
        borderRadius:15
    },
    viewButton:{
        flexDirection:'row',
        alignItems:'center'
    }
}) 