import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  function handleNavigationToCart() {
    navigation.navigate("Cart");
  }

  function handleNavigationToServicos() {
    navigation.navigate("Servicos");
  }

  function handleNavigationToItens() {
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
         



        <View style={styles.all}> 
          

        <View style={styles.cartaz2}>
            <View style={styles.perfil}>

              <Icon name="user" color="#FFF" size={96} /> 

            </View>

            <Text style={styles.title}>Juliana Pimenta</Text>
            <Text style={styles.title2}>Informações sobre o usuário</Text>
            <Text style={styles.title2}>Que podem ser alteradas clicando no botão de edição</Text>
            <Text style={styles.title2}>Tais como email, telefone, nome</Text>
            <Icon name="edit" color="#000" size={16} /> 
 
          </View>
          <View style={styles.cartaz2}>
  
            <Text style={styles.title}>Demais informações</Text>
            <Text style={styles.title2}>Como por exemplo</Text>
            <Text style={styles.title2}>Se você está acdastrado para receber</Text>
            <Text style={styles.title2}>whatsapp ou SMS do App</Text>
            <Icon name="edit" color="#000" size={16} /> 
 
          </View>

        </View>




        <View style={styles.footer}> 
        <RectButton style={styles.button} onPress={handleNavigationToItens} >
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

export default Profile;

const styles = StyleSheet.create({

  cartaz2: {
    marginTop: 20,
    backgroundColor: "#FFF",
    height: 350,
    borderRadius: 10,
    alignItems: "center",
    width: 330,
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

  perfil: {
    marginTop: 20,
    backgroundColor: "#D9298A",
    borderRadius: 50,
    height: 110,
    width: 110,
    padding: 5,
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
    backgroundColor: '#420B59',
    flexDirection: "column",
    alignItems: "center",
  },

  main: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },

  title: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    margin: 20,
    textAlign: "center",
  },

  title2: {
    color: "#000",
    fontSize: 15,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginBottom: 15,
    textAlign: "center",
  },

  imagem: {
    alignSelf: "center",
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

  select: {},

  input: {
    height: 60,
    backgroundColor: "#E0BBE4",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  all: {
    marginTop: 70,
    width: 360,
    height: 10000,
    backgroundColor: "#420B59",
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
