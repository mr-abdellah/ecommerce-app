import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonProps } from "../../types";

export const ButtonComponent: React.FC<buttonProps> = ({
  label,
  containerClassName,
  textClassName,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full ${containerClassName}`}
    >
      <Text className={` font-PoppinsSemiBold ${textClassName}`}>{label}</Text>
    </TouchableOpacity>
  );
};
