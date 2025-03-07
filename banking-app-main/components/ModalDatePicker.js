import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header1 from "./Header1";
import LocalSelectionRow from "./LocalSelectionRow";
import LocalCalendarGrid from "./LocalCalendarGrid";
import PrimaryButton from "./PrimaryButton";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
  Gap,
} from "../GlobalStyles";

const ModalDatePicker = ({
  headline = "Mon, Aug 17",
  showClearButton = false,
  supportingText = "Select date",
}) => {
  return (
    <View style={styles.modalDatePicker}>
      <Header1 />
      <LocalSelectionRow />
      <LocalCalendarGrid />
      <View style={[styles.localActions, styles.stateLayerSpaceBlock]}>
        {showClearButton && (
          <View style={[styles.clearButton, styles.stateLayerFlexBox1]}>
            <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
              <Text style={styles.labelText}>Clear</Text>
            </View>
          </View>
        )}
        <View style={[styles.buttonContainer, styles.stateLayerFlexBox]}>
          <PrimaryButton labelText="Cancel" />
          <PrimaryButton labelText="OK" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  stateLayerFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  stateLayerFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.schemesPrimary,
    textAlign: "center",
  },
  stateLayer: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    flex: 1,
  },
  clearButton: {
    borderRadius: Border.br_81xl,
    height: 40,
    overflow: "hidden",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    gap: Gap.gap_12xs,
  },
  localActions: {
    justifyContent: "space-between",
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  modalDatePicker: {
    position: "absolute",
    top: 116,
    left: 8,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorFloralwhite,
    width: 360,
    overflow: "hidden",
  },
});

export default ModalDatePicker;
