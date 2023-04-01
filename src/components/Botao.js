import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({ onPress, children, styles, stylesTexto }) {
  return (
    <TouchableOpacity style={[estilos.botao, styles]} onPress={onPress}>
      <Texto style={[estilos.textoBotao, stylesTexto]}>{children}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
