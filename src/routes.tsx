import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import Itens from "./pages/Itens";
import Servicos from "./pages/Servicos";
import Profile from "./pages/Profile";
import Compras from "./pages/Compras";
import Loja from "./pages/Loja";
import Notification from "./pages/Notification";
import Confirmacao from "./pages/Confirmacao";
import Pagamento from "./pages/Pagamento";
import Cart from "./pages/Cart";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Servicos" component={Servicos} />
        <AppStack.Screen name="Itens" component={Itens} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Compras" component={Compras} />
        <AppStack.Screen name="Loja" component={Loja} />
        <AppStack.Screen name="Notification" component={Notification} />
        <AppStack.Screen name="Confirmacao" component={Confirmacao} />
        <AppStack.Screen name="Pagamento" component={Pagamento} />
        <AppStack.Screen name="Cart" component={Cart} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
