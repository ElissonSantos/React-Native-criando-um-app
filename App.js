import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <View />;
  }

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
