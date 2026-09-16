import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

function TodoForm(props) {
  const [texto, setTexto] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();

    props.adicionarTarefa(texto);

    setTexto("");
  }

  return (
    <form onSubmit={enviarFormulario} className="mb-8 flex items-center gap-2">
      <Input
        type="text"
        placeholder="Adicionar uma tarefa..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        className="h-10 min-w-0 border-border bg-background"
      />

      <Button
        type="submit"
        variant="ghost"
        size="icon"
        title="Adicionar tarefa"
        className="h-10 w-10 shrink-0 text-muted-foreground hover:bg-accent hover:text-foreground"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
}

export default TodoForm;
