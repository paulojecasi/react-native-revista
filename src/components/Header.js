import React from 'react';
import {View, Text} from 'react-native';

import Estilo from '../estilo/padrao/';

const Header = (props) => {
    return(

      <View style = {Estilo.view_header}>
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
      </View>
    );
};

export default Header;

