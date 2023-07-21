import { Text } from "react-native";

export const errorMessage = (errors, error) => {
  if (errors[error]) {
    return (
      <Text className="text-orange-primary font-PoppinsMedium text-xs mt-2">
        {errors[error]?.message}
      </Text>
    );
  } else return;
};
