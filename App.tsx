import 'react-native-gesture-handler';
import React from 'react';
import styled from "styled-components";
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

//importando telas para navegacao
import { Routes } from './src/routes';
import theme from './src/styles/theme';



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium, 
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

