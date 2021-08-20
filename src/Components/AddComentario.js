import React, { Component } from 'react'
import {Text, View, StyleSheet, Alert, TextInput, TouchableWithoutFeedback as TWF} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComentario extends Component{

    state = {
        comentario : '',
        modoEdicao : false
    }

    confirmarComentario = ()=>{
        Alert.alert('Publicado com sucesso', this.state.comentario)
    }

    render(){
        
        let areaComentario = null

        if(this.state.modoEdicao){
            areaComentario =(
            <View style={estilo.Container}>

                <TextInput placeholder="Digite seu comentario..." value={this.state.comentario}
                onChangeText={texto=>{this.setState({comentario:texto})}}
                onSubmitEditing={this.confirmarComentario}
                autoFocus={true} style={estilo.input}>

                </TextInput>
                <TWF onPress={p=>{this.setState({modoEdicao:false})}}>
                    <Icon name="check" size={25}></Icon>
                </TWF>

            </View>
            )
        }else{
            areaComentario =(
            <TWF onPress={p=>{this.setState({modoEdicao:true})}}>
                <View style={estilo.Container}>
                    <Icon name="quote-left" size={25} />
                    <Text> Comentar</Text>
                </View>
            </TWF>
            )
        }


        return(
            <View style={{flex:1}}>
             {areaComentario}
            </View>
        )
    }
}

const estilo = StyleSheet.create({
   Container:{
       flexDirection:'row',
       marginLeft:10,
       alignItems:'center'
   },
   input:{
       width:'90%'
   }
}) 