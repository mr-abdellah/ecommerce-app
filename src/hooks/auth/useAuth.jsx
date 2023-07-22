import { useMutation } from "@tanstack/react-query";
import { loginUserApi, registerUserApi } from "../../apis";
import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const useAuth = () => {
  const { saveUser } = useContext(AuthProvider);
  const navigation = useNavigation();

  const { mutate: loginMutate, isLoading: loginLoading } = useMutation({
    mutationFn: async (data) => {
      return await loginUserApi(data)
        .then(async (res) => {
          if (res?.data?.user) {
            saveUser(res?.data?.token);
          }
          // else {
          //   Toast.show({
          //     type: "error",
          //     text1: "Erreur lors de la connexion",
          //     text2: res?.message,
          //   });
          // }
          // console.log("result", res);
        })
        .catch((err) => {
          // Toast.show({
          //   type: "error",
          //   text1: "Erreur lors de la connexion",
          //   text2: err?.response?.data?.message,
          //   autoHide: true,
          // });
          console.log("error while logging in", err);
        });
    },
  });

  const { mutate: signupMutate, isLoading: signupLoading } = useMutation({
    mutationFn: async (data) => {
      return await registerUserApi(data)
        .then(async (res) => {
          navigation.navigate("LoginScreen");
          console.log("res", res.data);
          Toast.show({
            type: "success",
            text1: res,
            text2: "Please use your credentials to login",
          });
        })
        .catch((err) => {
          console.log("error while creating account", err);
        });
    },
  });

  return { loginMutate, loginLoading, signupMutate, signupLoading };
};

export default useAuth;
