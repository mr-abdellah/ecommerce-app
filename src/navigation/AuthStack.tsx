import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import { LoginScreen } from "../screens";
import { ScreenType } from "../types/navigationTypes";

export type StackParams = {
  LoginScreen: any;
};

const Stack = createNativeStackNavigator<StackParams>();

const screens: ScreenType[] = [
  {
    name: "LoginScreen",
    screen: LoginScreen,
  },
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      {screens.map(({ name, screen }, index) => (
        <Stack.Screen
          name={name as keyof StackParams}
          component={screen}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};
export default AuthStack;
