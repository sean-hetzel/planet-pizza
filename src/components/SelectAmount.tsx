import { Add, Remove } from "@mui/icons-material";
import { FormControl, FormLabel, IconButton, Input } from "@mui/joy";
import { useState } from "react";

const SelectAmount = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue((prev) => prev + 1);
  const handleDecrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <FormControl>
      <FormLabel>2. Select Amount</FormLabel>
      <Input
        placeholder="0"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
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
