import {
  View,
  Text,
  Image,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { ButtonComponent, InputComponent } from "../../components";
import { useForm } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../validations";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const { height } = Dimensions.get("screen");
  const customHeight = height < 600 ? "auto" : "100%";

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <ScrollView
      className="flex flex-grow relative overflow-hidden"
      contentContainerStyle={{
        flexGrow: 1,
        height: customHeight,
      }}
    >
      <View className="bg-green-light w-full">
        <View className="p-8 space-y-2">
          <Text className="font-PoppinsSemiBold text-2xl text-white">
            Welcome
          </Text>
          <Text className="text-white text-sm font-PoppinsRegular tracking-tight">
            Sign in to Continue
          </Text>
        </View>
        <Image
          className="w-full relative -right-2"
          resizeMode="contain"
          source={require("../../../assets/illustrations/authIllustration.png")}
        />
      </View>
      <View
        className={`flex w-full h-full relative -top-9 bottom-0 rounded-t-3xl overflow-hidden p-8 ${
          theme === "dark" ? "bg-green-dark" : "bg-white"
        }`}
      >
        <InputComponent
          control={control}
          name="email"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="email-address"
          label="Your Email Address"
          placeholder="example@example.com"
          errors={errors}
        />

        <InputComponent
          control={control}
          name="password"
          placeholderTextColor={theme === "dark" ? "#fff" : "#000"}
          inputType="default"
          label="Password"
          placeholder="********"
          containerClassName="mt-8"
          isPassword
          errors={errors}
        />

        <View className="my-10 w-full flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <BouncyCheckbox
              size={22}
              fillColor="#FF8933"
              unfillColor="transparent"
              onPress={(isChecked) => {
                setValue("remember", isChecked);
              }}
            />
            <Text className="text-gray-primary font-PoppinsRegular -ml-1">
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="text-orange-primary text-xs font-PoppinsRegular">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent
          label="Sign In"
          containerClassName="bg-yellow-primary flex flex-row items-center justify-center p-3 rounded-2xl"
          textClassName="text-white"
          onPress={handleSubmit(handleLogin)}
        />

        <View className="w-full flex flex-row items-center justify-center mt-[20%]">
          <Text
            className={`font-PoppinsRegular ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text className="text-orange-primary font-PoppinsRegular">
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
