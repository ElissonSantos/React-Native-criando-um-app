import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/Cesta";
import mock from "./src/mocks/cesta";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    if (fontCarregada) {
      SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
