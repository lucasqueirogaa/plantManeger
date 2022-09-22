import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { SvgFromUri } from "react-native-svg";

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export default function PlantCardSecondary({ data, ...rest }: PlantProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar às</Text>
        <Text style={styles.time}>{data.hour}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 17,
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
});
