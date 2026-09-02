import { useState } from 'react'
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import './App.css'

const tarefas = [
  {id:1, titulo: "Estudar React", categoria: "SENAI", prioridade: "alta"},
  {id:2, titulo: "Estudar Back-end", categoria: "SENAI", prioridade: "media"},
  {id:3, titulo: "Prova Magnetismo", categoria: "SESI", prioridade: "baixa"},
  {id:4, titulo: "Viagem Selva Viva", categoria: "SESI", prioridade: "baixa"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100"> 
      <Header />

      <main className="max-w-4x1 mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-slate-700 mb-6">Minhas tarefinhas</h2>

        <section className="grid gap-4 sm:grid-cols-4">
          {tarefas.map((tarefas) => (
            <TaskCard
              key={tarefas.id}
              titulo={tarefas.titulo}
              categoria={tarefas.categoria}
              prioridade={tarefas.prioridade}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
