import React from "react";
import { TextField } from "@material-ui/core";

function CustomInput({
  value,
  setValue,
  label,
  name,
  autoComplete,
  autoFocus = false,
  required = false,
  type = "text",
  id
}) {
  return (
    <TextField
      variant="outlined"
      margin="dense"
      type={type}
      required={required}
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      onChange={e => {
        e.preventDefault();
        e.persist();
        setValue(e.target.value);
      }}
    />
  );
}

export default CustomInput;
