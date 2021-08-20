import React from 'react'
import {Text, View, StyleSheet, Image, Platform} from 'react-native'
import Icon from '../../assets/assets/imgs/icon.png'
export default props =>{
    return(
        <View style={estilo.container} >
            <View style={estilo.header}>
                <Image source={Icon} style={estilo.imagem}></Image>
                <Text style={estilo.texto}>Projeto Placa</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        borderBottomColor:'#000',
        padding:10,
        marginTop: Platform.OS === 'android' ? 15 : 0
    },
    header:{
        flexDirection: 'row',
        alignItems:'center'
    },
    imagem:{
        height:50,
        width:50,
        resizeMode:'contain'
    },
    texto:{
        fontSize:30,
        color:'#888'
    }
})