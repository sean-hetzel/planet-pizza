import { Button, ButtonGroup, Table } from "@mui/joy";
import { Check, Close, Edit } from "@mui/icons-material";
import { useState } from "react";
import SelectAmount from "./SelectAmount";
import useIsMobile from "../utils/useIsMobile";
import { Ingredient } from "../types/ingredient";

type IngredientTableProps = {
  ingredients?: Ingredient[];
  showType?: boolean;
  showQuantity?: boolean;
};

const IngredientTable = (props: IngredientTableProps) => {
  const { ingredients, showType, showQuantity } = props;

  const isMobile = useIsMobile();
  const [editMode, setEditMode] = useState(false);
  const [activeIngredient, setActiveIngredient] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>();

  const handleEdit = (index: number) => {
    setEditMode(true);
    setActiveIngredient(index);
    setQuantity(ingredients?.[index].quantity);
  };

  return (
    <Table sx={{ "& tr > *:last-child": { textAlign: "right" } }}>
      <thead>
        <tr>
          {showType && <th style={{ verticalAlign: "middle" }}>Type</th>}
          <th style={{ verticalAlign: "middle" }}>Ingredient</th>
          {showQuantity && (
            <th style={{ verticalAlign: "middle" }}>Quantity</th>
          )}
          <th></th>
        </tr>
      </thead>
      <tbody style={{ background: "#0b0d0e" }}>
        {ingredients?.map((ingredient, index) => (
          <tr key={index}>
            {showType && <td>{ingredient.type}</td>}
            <td>
              {ingredient.emoji} {ingredient.name}
            </td>
            {showQuantity && (
              <td>
                {editMode && activeIngredient === index ? (
                  <SelectAmount
                    value={quantity}
                    setValue={setQuantity}
                    autoFocus
                  />
                ) : (
                  ingredient.quantity
                )}
              </td>
            )}
            <td>
              {editMode && activeIngredient === index ? (
                <ButtonGroup
                  variant="soft"
                  aria-label="cancel or confirm buttons"
                  sx={{ justifyContent: "flex-end" }}
                  color="primary"
                  orientation={isMobile ? "vertical" : "horizontal"}
                >
                  <Button
                    onClick={() => setEditMode(false)}
                    endDecorator={<Close />}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setEditMode(false)}
                    endDecorator={<Check />}
                  >
                    Confirm
                  </Button>
                </ButtonGroup>
              ) : (
                !editMode && (
                  <Button
                    onClick={() => handleEdit(index)}
                    variant="soft"
                    endDecorator={<Edit />}
                  >
                    Edit
                  </Button>
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default IngredientTable;
