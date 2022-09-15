import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";

export default function PlantSave() {
  return (
    <View style={styles.container}>
      <SvgFromUri uri="" width={150} height={150} />
      <Text style={styles.plantName}>Nome da planta</Text>
      <Text style={styles.plantName}>Sobre a planta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  plantName: {},
});
