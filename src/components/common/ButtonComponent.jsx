import { Text, TouchableOpacity } from "react-native";

export const ButtonComponent = ({
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
