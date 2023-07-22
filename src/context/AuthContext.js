import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { createContext } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  // console.log('user :', user);

  const saveUser = async (token) => {
    await AsyncStorage.setItem("ecommerce_app", token).then(() =>
      setUserToken(token)
    );
  };

  const logout = async () => {
    setUserToken(null);
    AsyncStorage.removeItem("ecommerce_app");
  };

  return (
    <AuthProvider.Provider
      value={{
        saveUser,
        logout,
        userToken,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
