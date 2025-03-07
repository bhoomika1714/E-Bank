import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Saturday from "./Saturday";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const LocalCalendarGrid = () => {
  return (
    <View style={styles.localCalendarGrid}>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>S</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>M</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>T</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>W</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>T</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>F</Text>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>S</Text>
        </View>
      </View>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <Saturday />
        <Saturday propFlex={0.8333} />
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>1</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>3</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>4</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container4, styles.containerLayout]}>
            <View style={[styles.stateLayer4, styles.stateFlexBox]}>
              <Text style={[styles.date11, styles.dateTypo]}>5</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>6</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>7</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>8</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>9</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>10</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>11</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>12</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>13</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>14</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>15</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>16</Text>
            </View>
          </View>
        </View>
        <View style={[styles.thursday3, styles.sundayFlexBox]}>
          <View style={[styles.rangeHighlightEnd, styles.rangePosition]} />
          <View style={[styles.rangeHighlightStart, styles.rangePosition]} />
          <View style={[styles.container16, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={styles.date23}>17</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>18</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>19</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>20</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>21</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>22</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>23</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>24</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>25</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>26</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.daysOfTheWeek, styles.weekFlexBox]}>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>27</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>28</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>29</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>30</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sunday, styles.sundayFlexBox]}>
          <View style={[styles.container, styles.containerLayout]}>
            <View style={styles.stateFlexBox}>
              <Text style={[styles.date, styles.dateTypo]}>31</Text>
            </View>
          </View>
        </View>
        <Saturday propFlex={0.8333} />
        <Saturday propFlex={0.8333} />
      </View>
      <View style={[styles.week6, styles.weekFlexBox]}>
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
        <Saturday propFlex={1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekFlexBox: {
    height: 48,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  sundayFlexBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  dateTypo: {
    fontFamily: FontFamily.m3TitleLarge,
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "center",
  },
  containerLayout: {
    overflow: "hidden",
    borderRadius: Border.br_81xl,
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  stateFlexBox: {
    height: 40,
    width: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  rangePosition: {
    backgroundColor: Color.m3SysLightSecondaryContainer,
    top: "50%",
    width: "80%",
    marginTop: -20,
    position: "absolute",
    display: "none",
    height: 40,
  },
  date: {
    color: Color.schemesOnSurface,
    textAlign: "center",
  },
  sunday: {
    flexDirection: "row",
  },
  daysOfTheWeek: {
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  date11: {
    color: Color.schemesPrimary,
    textAlign: "center",
  },
  stateLayer4: {
    padding: Padding.p_3xs,
  },
  container4: {
    borderStyle: "solid",
    borderColor: Color.schemesPrimary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rangeHighlightEnd: {
    right: "48.75%",
    left: "-28.75%",
    zIndex: 0,
    display: "none",
  },
  rangeHighlightStart: {
    right: "-31.25%",
    left: "51.25%",
    zIndex: 1,
    display: "none",
  },
  date23: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.white,
    textAlign: "center",
  },
  container16: {
    backgroundColor: Color.schemesPrimary,
    zIndex: 2,
  },
  thursday3: {
    gap: Gap.gap_10xs,
  },
  week6: {
    display: "none",
    justifyContent: "center",
    flexDirection: "row",
  },
  localCalendarGrid: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default LocalCalendarGrid;
