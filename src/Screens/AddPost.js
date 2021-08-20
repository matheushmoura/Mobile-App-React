import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Dimensions} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import * as ImagePicker from 'expo-image-picker'



export default class AddPost extends Component{
    
    state={
        comentario:'',
        imagem:null,
        placa:''
    }


    render(){

        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            
            //if (pickerResult.cancelled === true) {
            //    return;
            //  }
          
            //  setSelectedImage({ localUri: pickerResult.uri });-->
          }
          //if (selectedImage !== null) {
            //return (
              //<View style={styles.container}>
                //<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
         //     </View>
         //   )
        //  }
        return(
            <ScrollView>
            <View style={estilo.container}>
                <Text>Adicione sua publicação.</Text>
                <View style={estilo.viewImagem}> 
                 <Image style={estilo.Imagem}></Image>
                </View>
                <TouchableOpacity onPress={openImagePickerAsync} style={estilo.button}>
                    <View style={estilo.viewButton}>
                        <Icon name="file" color="#FFF"></Icon>
                        <Text style={estilo.textoButton}>Buscar Imagem</Text>
                    </View>
                </TouchableOpacity>
                <TextInput  style={estilo.Input} placeholder="Digite seu comentario" value={this.state.comentario} onChangeText={texto=>{this.setState({comentario:texto})}}>

                </TextInput>
                <TextInput  style={estilo.placa} placeholder="AAA-0000" value={this.state.placa} onChangeText={texto=>{this.setState({placa:texto})}}>

                </TextInput>

            
                <TouchableOpacity style={estilo.button}>
                    <View style={estilo.viewButton}>
                        <Icon name="paper-plane" color="#FFF"></Icon>
                        <Text style={estilo.textoButton}>Publicar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
       marginTop:50,
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
    viewImagem:{
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').width/2
    },
    Imagem:{
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').width/2,
        resizeMode:'contain'
    },
    Input:{
        borderStyle:"solid",
        borderWidth:2,
        borderColor:'#888',
        marginTop:30,
        marginBottom:30,
        width:'90%'
    },
    placa:{
        borderStyle:"solid",
        borderWidth:2,
        borderColor:'#888',
        marginTop:30,
        marginBottom:30,
        width:70
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