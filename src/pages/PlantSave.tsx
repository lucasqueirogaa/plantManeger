import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
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
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { format, isBefore } from "date-fns";
import { loadPlant, PlantProps, savePlant } from "../libs/storage";

interface Params {
  plant: PlantProps;
}

export default function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const navigation = useNavigation();

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! ⌛");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDatetimePicker() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
        buttonTitle: "Muito obrigado :D",
        icon: "hug",
        nextScreen: "MyPlant",
      });
    } catch {
      Alert.alert("Não foi possível salvar.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} width={150} height={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <>
            <TouchableOpacity
              style={styles.dataTimePickerButton}
              onPress={handleOpenDatetimePicker}
            >
              <Text style={styles.dataTimePickerText}>{`Mudar ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</Text>
            </TouchableOpacity>
          </>
        )}

        <Button title="Cadastrar planta" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
  },
  plantAbout: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 5,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: getBottomSpace() || 40,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 16,
  },
  dataTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  dataTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
});
