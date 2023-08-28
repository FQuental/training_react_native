import React from "react";
import { Image, StyleSheet, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png'; //importando a imagem para o codigo

const width = Dimensions.get('screen').width; //largura da tela

export default function Cesta(){
    return <>
    <Image source={topo}  style={estilos.top}/>
    <Text style={estilos.title}>Detalhe da Cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    }
});