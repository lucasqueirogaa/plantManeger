import { Text, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/lucasqueirogaa.jpeg";
import fonts from "../styles/fonts";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.gretting}>Olá!</Text>
          <Text style={styles.userName}>Lucas</Text>
        </View>
        <Image source={userImg} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  gretting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
});
