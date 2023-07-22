import AppNav from "./src/navigation/AppNav";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./src/context/AuthContext";
import { Provider } from "react-redux";
import store from "./src/features/store";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  return (
    <>
      {fontsLoaded && (
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthContext>
              <AppNav />
            </AuthContext>
          </Provider>
        </QueryClientProvider>
      )}
    </>
  );
}
