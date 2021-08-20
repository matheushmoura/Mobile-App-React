import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'

export default class NewConta extends Component{
    state={
        nome:'',
        email:'',
        senha:''
    }
    criar=()=>{
        this.props.navigation.navigate('Tab')
    }

    render(){


        


        return(
            <ScrollView>
            <View style={estilo.container}>

                
                <Text style={estilo.texto}>Criar Sua Conta</Text>
                <TextInput placeholder="Informe seu nome" autoFocus={true} style={estilo.input}
                value={this.state.nome} onChangeText={texto=>{this.setState({nome:texto})}}></TextInput>

                <TextInput placeholder="Informe seu email"  style={estilo.input}
                value={this.state.email} onChangeText={texto=>{this.setState({email:texto})}}></TextInput>

                <TextInput placeholder="Informe sua senha"  style={estilo.input}
                value={this.state.senha} secureTextEntry={true} onChangeText={texto=>{this.setState({senha:texto})}}></TextInput>


                <TouchableOpacity style={estilo.button} onPress={this.criar}>
                    <View style={estilo.viewButton}>
                        <Text style={estilo.textoButton}>Criar Conta</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
       
        alignItems:'center'
    },
    texto:{
        marginHorizontal:10,
        borderRadius:15,
        marginTop:50
    },
    input:{
        borderStyle:"solid",
        borderWidth:2,
        borderColor:'#888',
        marginTop:30,
        marginBottom:30,
        width:'90%'
    },
    textoButton:{
        color:'#FFF',
        marginVertical:10,
        marginTop:10,
        fontSize:30,
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