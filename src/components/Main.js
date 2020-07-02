import React from 'react';
import {View,Text, Image} from 'react-native';

import Estilo from '../estilo/padrao';

const Main = (props) => {
    return(
      <View style = {Estilo.view3}>
        <View style = {Estilo.view3_1}>

         
          <Text style= {Estilo.view3_texto_principal}>
            {props.textoPrincipal_Props.slice(0,350)}
          </Text>
         
        </View>

        <View style = {Estilo.view3_2}>
          <Image 
            style ={Estilo.view3_image}
            source={require('../imagens/cactos.png')} 
            
          />
        </View>
      </View>

    );
};

export default Main;