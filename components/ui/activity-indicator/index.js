import React from "react";
import { ActivityIndicator,View } from "react-native";
import { Colors } from "../../../helpers/consts";
import { styles } from "./styles";

const Loader = () => {
  return (
    <View style={[styles.indicatorContainer, styles.horizontalStyle]}>
      <ActivityIndicator color={Colors.primary} size="large" />
    </View>
  );
};

export default Loader;
