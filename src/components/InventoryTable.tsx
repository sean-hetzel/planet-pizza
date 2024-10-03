import { Button, Table } from "@mui/joy";
import { IngredientsInventory } from "../types/inventory";
import { Edit } from "@mui/icons-material";

type InventoryTableProps = {
  inventory: IngredientsInventory[];
};

const InventoryTable = (props: InventoryTableProps) => {
  const { inventory } = props;

  return (
    <Table sx={{ "& tr > *:last-child": { textAlign: "right" } }}>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((ingredient, index) => (
          <tr key={index}>
            <td>
              {ingredient.emoji} {ingredient.name}
            </td>
            <td>{ingredient.quantity}</td>
            <td>
              <Button variant="soft" endDecorator={<Edit/>}>Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InventoryTable;
