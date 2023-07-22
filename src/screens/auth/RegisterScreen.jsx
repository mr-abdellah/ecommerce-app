import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ButtonComponent, InputComponent } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../validations";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/auth/useAuth";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const { signupLoading, signupMutate } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const handleRegister = (data) => {
    console.log(data);
    delete data["password_confirmation"];
    signupMutate(data);
  };

  return (
    <ScrollView
      className="flex flex-grow relative overflow-hidden bg-green-light"
      contentContainerStyle={{
        flexGrow: 1,
        height: "auto",
      }}
    >
      <View className="p-8 space-y-2 w-full">
        <Text className="font-PoppinsSemiBold text-2xl text-white">
          Register
        </Text>
        <Text className="text-white text-xs font-PoppinsRegular tracking-tight">
          Enter your personal details to create your account
        </Text>
      </View>

      <View
        className={`flex w-full h-full relative rounded-t-3xl overflow-hidden p-8 ${
          theme === "dark" ? "bg-green-dark" : "bg-white"
        }`}
      >
        <InputComponent
          control={control}
          name="full_name"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="default"
          label="Full Name"
          placeholder="John Smith"
          errors={errors}
        />

        <InputComponent
          control={control}
          name="email"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="email-address"
          label="Email Address"
          placeholder="example@example.com"
          errors={errors}
          containerClassName="mt-4"
        />

        <InputComponent
          control={control}
          name="phone"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="number-pad"
          label="Phone Number"
          placeholder="+213434434334"
          errors={errors}
          containerClassName="mt-4"
        />

        <InputComponent
          control={control}
          name="password"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="default"
          label="Password"
          placeholder="********"
          containerClassName="mt-4"
          isPassword
          errors={errors}
        />

        <InputComponent
          control={control}
          name="password_confirmation"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="default"
          label="Confirm Password"
          placeholder="********"
          containerClassName="mt-4"
          isPassword
          errors={errors}
        />

        <ButtonComponent
          label="Sign Up"
          containerClassName="bg-yellow-primary flex flex-row items-center justify-center p-3 rounded-2xl mt-8"
          textClassName="text-white"
          onPress={handleSubmit(handleRegister)}
        />

        <View className="w-full flex flex-row items-center justify-center mt-[10%]">
          <Text
            className={`font-PoppinsRegular ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text className="text-orange-primary font-PoppinsRegular">
              {" "}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
