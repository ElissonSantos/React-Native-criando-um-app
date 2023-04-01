import React from "react";
import { StyleSheet, Image, View } from "react-native";

import Texto from "../../../components/Texto";

export default function Itens({ titulo, lista }) {
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>

      {lista.map(({ nome, imagem }) => (
        <View key={nome} style={estilos.item}>
          <Image source={imagem} style={estilos.imagem} />

          <Texto style={estilos.nome}>{nome}</Texto>
        </View>
      ))}
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
