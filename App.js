//import { StatusBar } from 'expo-status-bar';
import { StatusBar,SafeAreaView} from 'react-native';
import React from 'react';
import Cesta from './src/screens/Cesta';

export default function App() {
  return (
    <SafeAreaView>   
      <StatusBar />  
      <Cesta />
    </SafeAreaView>
  );
}

//SafeAreaView um jeito de usar o View para não invadir as bordas do IOS
//StatusBar serve para usar a statusbar do android
