import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding, Border } from "../GlobalStyles";

const IconButton = ({ icon }) => {
  return (
    <View style={styles.iconButton}>
      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={[styles.stateLayer, styles.containerFlexBox]}>
          <Image style={styles.icon} contentFit="cover" source={icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  container: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
