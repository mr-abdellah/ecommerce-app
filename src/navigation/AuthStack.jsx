import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: "LoginScreen",
    screen: LoginScreen,
  },
  {
    name: "RegisterScreen",
    screen: RegisterScreen,
  },
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      {screens.map(({ name, screen }, index) => (
        <Stack.Screen name={name} component={screen} key={index} />
      ))}
    </Stack.Navigator>
  );
};
export default AuthStack;
