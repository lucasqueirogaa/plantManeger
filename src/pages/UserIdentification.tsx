import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocus(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocus(true);
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert("Me diz como chamar você 😢");
    }

    try {
      await AsyncStorage.setItem("@plantmanager:user", name);

      navigation.navigate("Confirmation", {
        title: "Prontinho",
        subtitle:
          "Agora vamos começar a cuidar das suas plantinha com muito cuidado",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: "PlantSelect",
      });
    } catch {
      Alert.alert("Não foi possível salvar o seu nome 😢");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? "😄" : "😃"}</Text>
              <Text style={styles.title}>Como podemos{"\n"}chamar você?</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocus || isFilled) && { borderBottomColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
            </View>
            <View style={styles.footer}>
              <Button title="Confirmar" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    paddingTop: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
