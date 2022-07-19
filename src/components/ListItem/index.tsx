import React from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = React.useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        id={`check-${item.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={({ target }) => setIsChecked(target.checked)}
      />
      <label htmlFor={`check-${item.id}`}>{item.name}</label>
    </C.Container>
  );
};
