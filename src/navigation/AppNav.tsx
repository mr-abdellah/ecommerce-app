import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { StatusBar } from "react-native";

const AppNav = () => {
  const token = null;
  return (
    <NavigationContainer>
      <StatusBar />
      {token !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
