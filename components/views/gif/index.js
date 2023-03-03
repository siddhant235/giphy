import React from "react";
import {View,Image} from "react-native"
import { styles } from "./styles";

const RenderGif = ({ gifUrl ,height,width }) => {

  return (
    <View style={styles.gifContainer}>
    <Image style={{...styles.gif,width:null,height:200}}  source={{ uri: gifUrl }}/>
    </View>
    )
  };

  export default RenderGif;