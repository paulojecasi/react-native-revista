
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Estilo from './src/estilo/padrao';

class RevistaCactos extends Component{
  render(){
    const textoPrincipal = 'Este livro conta a historia um empreendimento de sucesso, a CACTOS DEV. Que inicio no dia 17/06/2020. Dois anos depois, se tornou uma das maiores empresas de tecnologia do pais, desenvolvendos APP, Jogos e Sites para as maiores empresas do Mercado.';
    const texto2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
    const texto3 = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model se';
    const texto4 = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica';
    return(
      <View style= {Estilo.estilo1}>
        <View style = {Estilo.view1}>
          <View style={Estilo.view1_1}>
          </View>

          <View style={Estilo.view1_2}>
          </View>

          <View style={Estilo.view1_3}>
          </View>

          <View style={Estilo.view1_4}>
          </View>
        </View>

        <View style = {Estilo.view2}>
          <Text style= {Estilo.view2_font}> Revista Cactos Dev </Text>
        </View>
        <View style = {Estilo.view3}>
          <View style = {Estilo.view3_1}>

           
            <Text style= {Estilo.view3_texto_principal}>
              {textoPrincipal.slice(0,350)}
            </Text>
           
          </View>

          <View style = {Estilo.view3_2}>
            <Image 
              style ={Estilo.view3_image}
              source={require('./src/imagens/cactos.png')} 
              
            />
          
          </View>
        </View>

        <View style = {Estilo.view4}>
          <View style = {Estilo.view4_1}>

            <View style= {Estilo.view4_1_1}>
              <Text style= {Estilo.view4_1_1_text}> 
                Titulo 01 
              </Text>

            </View>
            <View style= {Estilo.view4_1_2}>
              <View style = {Estilo.view_Titulo01}>
                <View style = {Estilo.view_Titulo01A}>
                  <Image 
                    style ={Estilo.view_Titulo01A_image}
                    source={require('./src/imagens/T.png')}
                  />
                </View>
                <View style = {Estilo.view_Titulo01B}>
                  <Text style= {Estilo.texto2}>
                    {texto2.slice(0,350)}
                  </Text>
                </View>
              </View>
              <View style = {Estilo.view_Titulo01C}>
                <Text style= {Estilo.texto3}>
                    {texto3.slice(0,350)}
                </Text>
              </View>
            </View>

          </View>

          <View style = {Estilo.view4_2}>
            <View style= {Estilo.view4_2_1}>
              <Text style= {Estilo.view4_2_1_text}> 
                Titulo 02
              </Text>
            </View>

            <View style= {Estilo.view4_2_2}>
              <View style = {Estilo.view_Titulo02}>
                <Text style= {Estilo.texto3}>
                    {texto3.slice(0,350)}
                </Text>

              </View>
              <View style = {Estilo.view_Titulo02A}>
                <View style = {Estilo.view_Titulo02B}>
                  <Text style= {Estilo.texto4}>
                    {texto4.slice(0,350)}
                  </Text>

                </View>
                <View style = {Estilo.view_Titulo02C}>
                  <Image 
                    style ={Estilo.view_Titulo02C_image}
                    source={require('./src/imagens/pc.jpeg')}
                  />
                </View>
              </View>
              

            </View>
          </View>
        </View >

        <View style = {Estilo.view5}>
          <Text style = {Estilo.view5_font}> Copyright (c) Cactos Dev </Text>
        </View>
        

        

      </View>

    );
  }
}
 export default RevistaCactos;




