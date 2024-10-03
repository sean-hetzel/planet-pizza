import { Table } from "@mui/joy";
import { IngredientsInventory } from "../types/inventory";

type InventoryTableProps = {
  inventory: IngredientsInventory[] | null;
};

const InventoryTable = (props: InventoryTableProps) => {
  const { inventory } = props;

  return (
    <Table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {inventory?.map((ingredient) => (
          <tr>
            <td>{ingredient.emoji} {ingredient.name}</td>
            <td>{ingredient.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InventoryTable;
