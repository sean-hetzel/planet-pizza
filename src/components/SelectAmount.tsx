import { FormControl, FormLabel, Input } from "@mui/joy";

const SelectAmount = () => {
  return (
    <FormControl>
      <FormLabel>2. Select Amount</FormLabel>
      <Input placeholder="0" type="number"/>
    </FormControl>
  );
};

export default SelectAmount;
