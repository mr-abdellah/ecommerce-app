import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { StatusBar } from "react-native";
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const AppNav = () => {
  const { userToken, logout } = useContext(AuthProvider);

  // logout();

  return (
    <NavigationContainer>
      <StatusBar />
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
