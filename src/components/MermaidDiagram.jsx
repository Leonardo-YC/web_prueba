import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidDiagram() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: "#4f46e5",
        primaryTextColor: "#fff",
        primaryBorderColor: "#312e81",
        lineColor: "#6366f1",
        secondaryColor: "#c7d2fe",
        tertiaryColor: "#eef2ff",
      },
      flowchart: { curve: "basis" },
    });
    mermaid.contentLoaded();
  }, []);

  const diagram = `
    flowchart TD
      A([🏁 Inicio del Proyecto]) --> B{📋 Planificación}
      B -->|Ideas| C[🎨 Diseño UX/UI]
      B -->|Tareas| D[🛠 Backend]
      C --> E[💻 Frontend]
      D --> E
      E --> F[✅ Pruebas]
      F --> G[🚀 Despliegue]
      G --> H([🏆 Fin])
  `;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 border my-6">
      <div className="mermaid">{diagram}</div>
    </div>
  );
}