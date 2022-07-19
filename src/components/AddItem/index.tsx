import React, { KeyboardEvent, ChangeEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddItem = ({ onEnter }: Props) => {
  const [task, setTask] = React.useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (["Enter", "NumpadEnter"].includes(event.code) && task.trim() !== "") {
      onEnter(task.trim());
      setTask("");
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma task"
        value={task}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
