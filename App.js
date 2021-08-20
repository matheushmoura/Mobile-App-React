import * as React from "react";
import {   
  SafeAreaView,
ScrollView
  } from "react-native";
import Header from './src/Components/Header'
import Post from './src/Components/Post'

export default function App() {
  const postcomentarios = [{login:'Ana',comentario:'Hahahaha'},
  {login:'Matheus',comentario:'Hahahaha'},
  {login:'Janio',comentario:'Hahahaha2'},
  {login:'Gustavo',comentario:'Hahahaha3'}  
]
  return (
    <SafeAreaView>
      <Header></Header>
      <ScrollView>
      <Post imagem={require('./assets/assets/imgs/gate.jpg')} comentarios={postcomentarios}></Post>
      <Post imagem={require('./assets/assets/imgs/bw.jpg')} comentarios={postcomentarios}></Post>
      <Post imagem={require('./assets/assets/imgs/boat.jpg')} comentarios={postcomentarios}></Post>
      </ScrollView>
    </SafeAreaView>
  );
}
