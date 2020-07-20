import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Servicos = () => {
  const navigation = useNavigation();

  function handleNavigationToCart() {
    navigation.navigate("Cart");
  }

  function handleNavigationToServicos() {
    navigation.navigate("Servicos");
  }

  function handleNavigationToLoja() {
    navigation.navigate("Loja");
  }
  
  function handleNavigationToProfile() {
    navigation.navigate("Profile");
  }
  
  function handleNavigationToCompras() {
    navigation.navigate("Compras");
  }

  function handleNavigationToNotification() {
    navigation.navigate("Notification");
  }

  function handleNavigationToItens() {
    navigation.navigate("Itens");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container} >
        <View style={styles.header}>
          <View style={styles.foto}>
            <Icon name="user" color="#FFF" size={24} />
          </View>
          <View style={styles.pesquisa}>
            
          <Icon name="search" color="#000" size={24} />
          </View>
          <RectButton style={styles.carrinho} onPress={handleNavigationToCart} >
            <View style={styles.carrinho}>
              <Text>
                <Icon name="shopping-cart" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
         </View>
          
        <View style={styles.main}> 
          <View style={styles.abas}> 
          <RectButton style={styles.itens}  onPress={handleNavigationToItens}>
            <Text style={styles.buttonText}>Itens</Text>
          </RectButton>
          <RectButton style={styles.servicos} onPress={handleNavigationToServicos}>
            <Text style={styles.buttonText}>Serviços</Text>
          </RectButton>          
          </View>
          <View style={styles.retangulo}> 

          <Text style={styles.title}>
            Próximos de você
          </Text>

          </View>
          <View style={styles.closest}> 
            <RectButton style={styles.cartaz1} onPress={handleNavigationToLoja}>
              <Image source={require("../../assets/comida.png") } />
            </RectButton>
            <RectButton style={styles.cartaz1} >
              <Image source={require("../../assets/bolo2.png") } />
            </RectButton>
            <RectButton style={styles.cartaz1} >
              <Image source={require("../../assets/artesanato2.png") } />
            </RectButton>
            <RectButton style={styles.cartaz1} >
              <Image source={require("../../assets/roupa2.png") } />
            </RectButton>
            
          </View>

          <View style={styles.retangulo}> 

          <Text style={styles.title}>
            Serviços disponíveis
          </Text>

          </View>
           
          <View style={styles.all}> 
          <RectButton style={styles.cartaz2} onPress={handleNavigationToLoja}>
              <Image source={require("../../assets/bolo.png") } />
            </RectButton>
              <Image source={require("../../assets/artesanato.png") } />
            <RectButton style={styles.cartaz2} onPress={handleNavigationToLoja}>
              <Image source={require("../../assets/roupa.png") } />
            </RectButton>
            <RectButton style={styles.cartaz2} onPress={handleNavigationToLoja}>
            </RectButton>
          </View>          
        </View>

        <View style={styles.footer}> 
        <RectButton style={styles.button} >
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="home" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToProfile}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="user" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToCompras}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="shopping-bag" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>
          <RectButton style={styles.button} onPress={handleNavigationToNotification}>
            <View style={styles.buttonIcon} >
              <Text>
                <Icon name="bell" color="#FFF" size={24} />
              </Text>
            </View>
          </RectButton>

        </View>
      
      </View>
    </KeyboardAvoidingView>
  );
};

export default Servicos;

const styles = StyleSheet.create({

  abas: {
    marginTop: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
  },

  itens: {
    backgroundColor: "#D9298A",
    height: 60,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    width: 180,
  },

  servicos: {
    backgroundColor: "#A9298A",
    height: 60,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    width: 180,
  },

  cartaz1: {
    backgroundColor: "#420B59",
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    width: 120,
    padding: 10,
    margin: 2,
  },

  cartaz2: {
    backgroundColor: "#420B59",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    width: 350,
    padding: 10,
    marginTop: 5,
  },

  loja: {
    width: 360,
    height: 200,
  },

  foto: {
      height: 40,
      width: 40,
      borderRadius: 50,
      backgroundColor: "#D9298A",
      justifyContent: "center",
      alignItems: "center",
  },

  pesquisa: {
    width: 230,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems:"flex-end",
    paddingRight: 10,
  },

  carrinho :{
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#D9298A",
    justifyContent: "center",
    alignItems: "center",
},

  container: {
    flex: 1,
    padding: 32,
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
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    margin: 10,
    textAlign: "center",
  },

  retangulo: {
    width: 360,
    height: 50,
    backgroundColor: "#420B59", 
    paddingBottom: 15,
    marginBottom: 5,
    alignItems: "center",
  },

  title2: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    margin: 20,
    marginTop: 110,
    textAlign: "center",
  },

  imagem: {
    alignSelf: "center",
  },

  description: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 10,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
    textAlign: "center",
  },

  header: {
    backgroundColor: "#E0BBE4",
    position: "absolute",
    width: 360,
    height: 120,  
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },

  footer: {
    backgroundColor: "#E0BBE4",
    position: "absolute",
    width: 360,
    height: 60,  
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  all: {
    width: 360,
    height: 100,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closest: {
    width: 360,
    height: 100,
    backgroundColor: "#FFF",
    flexDirection: "row",
    marginBottom: 30,
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

  close: {
    height: 80,
    width: 200,
    fontSize: 18,
    flexDirection: "row",
 },
 
});
