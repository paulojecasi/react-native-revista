import React from 'react';
import {View, Text, Image} from 'react-native';

import Estilo from '../estilo/padrao';

const Secondary = (props) => {
    return(
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
                  source={require('../imagens/T.png')}
                />
              </View>
              <View style = {Estilo.view_Titulo01B}>
                <Text style= {Estilo.texto2}>
                  {props.texto2_Props.slice(0,350)}
                </Text>
              </View>
            </View>
            <View style = {Estilo.view_Titulo01C}>
              <Text style= {Estilo.texto3}>
                  {props.texto3_Props.slice(0,350)}
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
                  {props.texto3_Props.slice(0,350)}
              </Text>

            </View>
            <View style = {Estilo.view_Titulo02A}>
              <View style = {Estilo.view_Titulo02B}>
                <Text style= {Estilo.texto4}>
                  {props.texto4_Props.slice(0,350)}
                </Text>

              </View>
              <View style = {Estilo.view_Titulo02C}>
                <Image 
                  style ={Estilo.view_Titulo02C_image}
                  source={require('../imagens/pc.jpeg')}
                />
              </View>
            </View>
            
          </View>
        </View>
      </View >

    );
};

export default Secondary;