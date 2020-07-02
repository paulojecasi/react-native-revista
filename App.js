
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Estilo from './src/estilo/padrao';

import Header from './src/components/Header';
import Main from './src/components/Main';
import Secondary from './src/components/Secondary';

class RevistaCactos extends Component{
  render(){
    const textoPrincipal = 'Este livro conta a historia um empreendimento de sucesso, a CACTOS DEV. Que inicio no dia 17/06/2020. Dois anos depois, se tornou uma das maiores empresas de tecnologia do pais, desenvolvendos APP, Jogos e Sites para as maiores empresas do Mercado.';
    const texto2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
    const texto3 = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model se';
    const texto4 = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica';
    return(
      <View style= {Estilo.estilo1}>
        <Header/> 
        <Main textoPrincipal_Props = {textoPrincipal}/> 
        <Secondary 
            texto2_Props={texto2}
            texto3_Props={texto3}
            texto4_Props={texto4}
        />
  

        <View style = {Estilo.view5}>
          <Text style = {Estilo.view5_font}> Copyright (c) Cactos Dev </Text>
        </View>
        

        

      </View>

    );
  }
}
 export default RevistaCactos;




