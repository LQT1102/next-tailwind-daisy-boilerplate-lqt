import { forwardRef, LegacyRef } from "react";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";

interface InputFieldProps extends Omit<FieldWrapperProps, "children"> {}

const InputField = forwardRef(
  (
    { helperText, errorText, label, ...inputProps }: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <FieldWrapper helperText={helperText} errorText={errorText} label={label}>
        <input />
      </FieldWrapper>
    );
  }
);

export default InputField;
