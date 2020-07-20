import React, { useState } from "react";
import axios from "axios";
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Pagamento = () => {

  const navigation = useNavigation();
 
  function handleNavigationToItens() {
    navigation.navigate("Itens");
  }

  function apiZenviaWpp() {

    const headers = {
      'Content-Type': 'application/json',
      'X-API-TOKEN': '3c53qgGw80xz5jjfjciAyhMHa3-3tzlhBHa5'
    }
    
    const data = {
        "from":"raspy-bromine",
      "to":"5531997763123",
      "contents":[
        {
          "type":"text",
          "text":"Olá! É um pequeno Empreendedor ou tem interesse de ajudá-los? Órion é a plataforma para você! Vem dar uma conferida http://orion.linkfictiocio.naotentaclicar.br"
        }
      ]
    }
    axios.post('https://api.zenvia.com/v1/channels/whatsapp/messages', data, {
        headers
      })
      .then((response) => {
        console.log("deu certo");
      })
      .catch((error) => {
        console.log("Deu errado");
      })

      handleNavigationToItens();
  }

  function apiZenviaSMS() {

    const headers = {
        'Content-Type': 'application/json',
        'X-API-TOKEN': '3c53qgGw80xz5jjfjciAyhMHa3-3tzlhBHa5'
      }
      
      const data = {
          "from":"raspy-bromine",
        "to":"5531997763123",
        "contents":[
          {
            "type":"text",
            "text":"Olá! É um pequeno Empreendedor ou tem interesse de ajudá-los? Órion é a plataforma para você! Vem dar uma conferida http://orion.linkfictiocio.naotentaclicar.br"
          }
        ]
      }
      axios.post('https://api.zenvia.com/v1/channels/sms/messages', data, {
          headers
        })
        .then((response) => {
          console.log("deu certo");
        })
        .catch((error) => {
          console.log("Deu errado");
        })

        handleNavigationToItens();
    }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container} >
        <View style={styles.confirm}>
        <Image source={require("../../assets/vezinho.png") } />

        <Text style={styles.title2}>Pedido Realizado!</Text>

        </View>

        <Image source={require("../../assets/zapzap.jpeg") } />

        <RectButton style={styles.button2} onPress={apiZenviaWpp}>
              <Text style={styles.descricao2}>
                Receber Promoções por Whatsapp
              </Text>
         </RectButton>

        <RectButton style={styles.button3} onPress={apiZenviaSMS}>
              <Text style={styles.descricao2}>
                Indicar o App para amigos
              </Text>
         </RectButton>
        <RectButton style={styles.button4} onPress={handleNavigationToItens}>

              <Text style={styles.descricao2}>
                Acompanhar Solicitação
              </Text>
         </RectButton>
      
      </View>
    </KeyboardAvoidingView>
  );
};

export default Pagamento;

const styles = StyleSheet.create({

  descricao2: {
    color: "#FFF",
    fontSize: 15,
    maxWidth: 200,
    margin: 5,
    textAlign: "center",
    marginLeft: 5,
    fontWeight: "bold",
  },
  
  button2: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 150,
    textAlign: "center",
    position: "absolute",
    bottom: 70,
  },

  button3: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 150,
    textAlign: "center",
    position: "absolute",
    bottom: 140,
  },

  button4: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 150,
    textAlign: "center",
    position: "absolute",
    bottom: 210,
  },

  confirm: {
    alignItems: "center",
    height: 170,
  },

  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFF',
    flexDirection: "column",
    alignItems: "center",
  },

  main: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },

  title: {
    width: 360,
    padding: 5,
    height: 40,
    color: "#000",
    fontSize: 25,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 50,
    textAlign: "center",
    alignSelf: "center",
  },

  title2: {
    marginTop: 20,
    color: "#000",
    fontSize: 17,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    textAlign: "center",
  },

  imagem: {
    alignSelf: "center",
  },


  all: {
    width: 360,
    height: 1000,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#D9298A",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 50,
  },

  buttonIcon: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

 
});
