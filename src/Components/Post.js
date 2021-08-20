import React from 'react'
import { View, StyleSheet, Image, Dimensions} from 'react-native'
import Autor from './Autor'
import Comentarios from './Comentarios'
import AddComentario from './AddComentario'
import Placa from './Placa'

export default props =>{
    return(
        <View style={estilo.container} >
                <Autor email={props.email} nome={props.nome}></Autor>
                <Image source={props.imagem} style={estilo.imagem}></Image>
                <Placa source={props.placa} style={estilo.placa}></Placa>
                <Comentarios comentarios={props.comentarios}></Comentarios>
                <AddComentario></AddComentario>
        </View>
    )
}
 
const estilo = StyleSheet.create({
    container:{
       flex:1,
       marginTop:20
    },
    imagem:{
        marginTop:5,
        height:Dimensions.get('window').width * 3 / 4,
        width:Dimensions.get('window').width,
        resizeMode:'contain'
    }
})