import { Checkbox, FormControlLabel } from "@mui/material";
import { useState, ChangeEvent } from "react";

type WSCheckboxProps = { label?: string, onChange?: (checked: boolean)=>void };

export const WSCheckbox = ({ label = "Check", onChange }: WSCheckboxProps) => {
  
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange && onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={handleChange} />
      }
      label={label}
    />
  );
};


