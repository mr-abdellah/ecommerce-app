import { Control } from "react-hook-form";
import { loginUserInput } from "../authTypes";
import { KeyboardTypeOptions } from "react-native";
import React from "react";

export interface inputProps {
  label: string;
  containerClassName?: string;
  placeholderTextColor: string;
  placeholder?: string;
  inputType: KeyboardTypeOptions;
  name: keyof Pick<loginUserInput, "email" | "password">;
  control: Control<loginUserInput>;
  isPassword?: boolean;
  errors: any;
}
