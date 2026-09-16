import TodoItem from "@/components/TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.tarefas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          excluirTarefa={props.excluirTarefa}
          editarTarefa={props.editarTarefa}
          alternarConclusao={props.alternarConclusao}
        />
      ))}
    </ul>
  );
}

export default TodoList;
