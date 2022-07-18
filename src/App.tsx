import React from "react";
import * as C from './App.styles'
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done:false },
    { id: 2, name: 'Comprar um bolo na padaria', done:false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}

        {list.map((item, index) =>
          (
            <div>{item.name}</div>
          )
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
