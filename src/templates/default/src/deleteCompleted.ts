import { init, id, tx } from '@instantdb/react'

const db = init({ appId: '8530518c-fc2d-4579-8705-748aa18c25c2' })

type Todo = {
  id: string
  text: string
  done: boolean
  createdAt: number
}

export function deleteCompleted(todos: Todo[]) {
  const completed = todos.filter((todo) => todo.done)
  const txs = completed.map((todo) => tx.todos[todo.id].delete())
  db.transact(txs)
}

