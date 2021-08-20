import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component{
    state={
        email:'',
        senha:''
    }
    entrar=()=>{
        this.props.navigation.navigate('Tab')
    }

    criarconta=()=>{
        this.props.navigation.navigate('NewConta')
    }
    render(){


        


        return(
            <View style={estilo.container}>

                
                <Text style={estilo.texto}>Acesse sua Conta</Text>
                <TextInput placeholder="Informe seu email"  style={estilo.input} value={this.state.email} onChangeText={texto=>{this.setState({email:texto})}}></TextInput>

                <TextInput placeholder="Informe sua senha"  style={estilo.input}
                value={this.state.senha} secureTextEntry={true} onChangeText={texto=>{this.setState({senha:texto})}}></TextInput>


                <TouchableOpacity style={estilo.button} onPress={this.entrar}>
                    <View style={estilo.viewButton}>
                        <Text style={estilo.textoButton}>Entrar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.buttonlittle} onPress={this.criarconta}>
                    <View style={estilo.viewButton}>
                        <Text style={estilo.textoButtonlittle}>Criar nova conta</Text>
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
    textoButtonlittle:{
        color:'#FFF',
        marginVertical:10,
        marginTop:10,
        fontSize:11,
        marginLeft:5
    },
    button:{
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'#08C',
        borderRadius:15
    },
    buttonlittle:{
        marginTop:5,
        paddingBottom:1,
        paddingTop:1,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#08C',
        borderRadius:15
    },
    viewButton:{
        flexDirection:'row',
        alignItems:'center'
    }
}) 