import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform,} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleNavigationToItens() {
    navigation.navigate("Itens", { login, senha });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.imagem}>
            <Image source={require("../../assets/logo2x.png") } />
          </View>
          <View>
          <Text style={styles.title}>
              Amparando Pequenos Negócios
          </Text>
            <Text style={styles.description}>
              Órion é o marketplace focado no pequeno negócio. Levamos o cliente até o micro empreendedor.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            maxLength={2}
            autoCapitalize="characters"
            value={login}
            autoCorrect={false}
            onChangeText={setLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="senha"
            autoCorrect={false}
            value={senha}
            onChangeText={setSenha}
          />

          <RectButton style={styles.button} onPress={handleNavigationToItens}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#420B59',
    flexDirection: "column",
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
    marginTop: 10,
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

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#D9298A",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
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
