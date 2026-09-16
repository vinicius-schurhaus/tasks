import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash2, Check, X } from "lucide-react";

function TodoItem(props) {
  const [editando, setEditando] = useState(false);

  const [textoEditado, setTextoEditado] = useState(props.tarefa.tarefa);

  function iniciarEdicao() {
    setTextoEditado(props.tarefa.tarefa);
    setEditando(true);
  }

  function salvarEdicao() {
    props.editarTarefa(props.tarefa.id, textoEditado);

    setEditando(false);
  }

  function cancelarEdicao() {
    setTextoEditado(props.tarefa.tarefa);
    setEditando(false);
  }

  if (editando) {
    return (
      <li className="flex items-center gap-2 border-b border-border py-3">
        <Input
          autoFocus
          value={textoEditado}
          onChange={(evento) => setTextoEditado(evento.target.value)}
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              salvarEdicao();
            }

            if (evento.key === "Escape") {
              cancelarEdicao();
            }
          }}
          className="h-9 min-w-0 border-border bg-background"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={salvarEdicao}
          title="Salvar"
          className="h-9 w-9 shrink-0 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <Check className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={cancelarEdicao}
          title="Cancelar"
          className="h-9 w-9 shrink-0 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 border-b border-border py-3 sm:gap-3">
      <Checkbox
        checked={props.tarefa.concluida}
        onCheckedChange={() => props.alternarConclusao(props.tarefa.id)}
        className="shrink-0"
      />

      <span
        className={
          props.tarefa.concluida
            ? "min-w-0 flex-1 break-words text-muted-foreground line-through"
            : "min-w-0 flex-1 break-words text-foreground"
        }
      >
        {props.tarefa.tarefa}
      </span>

      <div className="flex shrink-0">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={iniciarEdicao}
          title="Editar"
          className="h-9 w-9 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => props.excluirTarefa(props.tarefa.id)}
          title="Excluir"
          className="h-9 w-9 text-muted-foreground hover:bg-accent hover:text-red-400"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
