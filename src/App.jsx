import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if (!tarefasSalvas) {
      return [];
    }

    return JSON.parse(tarefasSalvas);
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(texto) {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      tarefa: texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function editarTarefa(id, novoTexto) {
    if (!novoTexto.trim()) return;

    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            tarefa: novoTexto,
          };
        }

        return tarefa;
      }),
    );
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            concluida: !tarefa.concluida,
          };
        }

        return tarefa;
      }),
    );
  }

  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-8 flex items-center gap-3 text-2xl font-medium tracking-tight">
          <Check className="h-7 w-7 shrink-0" />
          <span>Tasks</span>
        </h1>

        <TodoForm adicionarTarefa={adicionarTarefa} />

        <TodoList
          tarefas={tarefas}
          excluirTarefa={excluirTarefa}
          editarTarefa={editarTarefa}
          alternarConclusao={alternarConclusao}
        />
      </div>
    </main>
  );
}

export default App;
