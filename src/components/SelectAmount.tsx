import { Add, Remove } from "@mui/icons-material";
import { FormControl, FormLabel, IconButton, Input } from "@mui/joy";
import { useState } from "react";

type SelectAmountProps = {
  value?: number;
  setValue?: (newValue?: number) => void; 
  label?: string;
};

const SelectAmount = (props: SelectAmountProps) => {
  const { value, setValue, label } = props;

  const handleIncrement = () => setValue?.(value !== undefined ? value + 1 : 1);
  const handleDecrement = () =>
    setValue?.(value !== undefined && value > 0 ? value - 1 : 0);

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        placeholder="Enter quantity"
        type="number"
        value={value === undefined ? "" : value}
        onChange={(e) => {
          const newValue = e.target.value;
          setValue?.(newValue === "" ? undefined : Number(newValue));
        }}
        autoFocus
        endDecorator={
          <>
            <IconButton size="sm" onClick={handleDecrement}>
              <Remove />
            </IconButton>
            <IconButton size="sm" onClick={handleIncrement}>
              <Add />
            </IconButton>
          </>
        }
        sx={{
          "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
        slotProps={{
          input: {
            min: 0,
          },
        }}
      />
    </FormControl>
  );
};

export default SelectAmount;
