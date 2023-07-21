import { View, Text, TextInput, useColorScheme } from "react-native";
import React from "react";
import { inputProps } from "../../types";
import { Controller } from "react-hook-form";
import { errorMessage } from "../../helpers/errorMessage";

export const InputComponent: React.FC<inputProps> = ({
  label,
  placeholder,
  inputType,
  name,
  control,
  placeholderTextColor,
  containerClassName,
  isPassword = false,
  errors,
}) => {
  const theme = useColorScheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onChange, ref, value } }) => {
        return (
          <>
            <View className={`w-full ${containerClassName}`} key={name}>
              <Text className="font-PoppinsRegular text-xs text-gray-primary">
                {label}
              </Text>
              <TextInput
                keyboardType={inputType}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                ref={ref}
                placeholderTextColor={placeholderTextColor}
                className={`text-sm font-PoppinsRegular border-b border-b-[#CCC] py-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                secureTextEntry={isPassword}
              />
            </View>
            {errorMessage(errors, name)}
          </>
        );
      }}
    />
  );
};
