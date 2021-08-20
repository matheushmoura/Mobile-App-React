import React, { Component } from 'react';
import {   
  SafeAreaView,
FlatList
  } from "react-native";
import Header from '../Components/Header'
import Post from '../Components/Post'

export default class Feed extends Component{
    state ={
         posts:[{
            id:1,
            nome:"Ana Paula",
            email:"anapaulazanelato@gmail.com",
            imagem: require('../../assets/assets/imgs/gate.jpg'),
            placa:"AAA-0000",
            comentarios: [{
            login:'Ana',
            comentario:'Batida feia'
            }, {
            login:'Matheus',
            comentario:'Hahahaha'
            }, {
            login:'Janio',
            comentario:'Hahahaha2'
            }, {
            login:'Gustavo',
            comentario:'Hahahaha3'
            }
          ]
        },
        {
            id:2,
            nome:"Matheus Moura",
            email:"matheusshutt4@gmail.com",
            imagem: require('../../assets/assets/imgs/bw.jpg'),
            placa:"AAA-0000",
            comentarios: [{
            login:'Ana',
            comentario:'Hahahaha'
            }, {
            login:'Matheus',
            comentario:'Hahahaha'
            }, {
            login:'Janio',
            comentario:'Hahahaha2'
            }, {
            login:'Gustavo',
            comentario:'Hahahaha3'
            }
          ]
        }
    
    ]
    }
  
render(){
  return (
    <SafeAreaView style={{flex:1}}>
      <Header></Header>

      <FlatList data={this.state.posts} keyExtractor={item=>`${item.id}`}
      renderItem={({item})=> <Post key={item.id} {...item}/>}>
      </FlatList>

    </SafeAreaView>
  );
}}