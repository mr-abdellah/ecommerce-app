import { useMutation } from "@tanstack/react-query";
import { loginUserApi } from "../../apis";
import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const useAuth = () => {
  const { saveUser } = useContext(AuthProvider);

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
  return { loginMutate, loginLoading };
};

export default useAuth;
