import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Cesta from "./src/telas/Cestas";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
