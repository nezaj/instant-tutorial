import { init, id, tx } from '@instantdb/react'

const db = init({ appId: '8530518c-fc2d-4579-8705-748aa18c25c2' })

type Todo = {
  id: string
  text: string
  done: boolean
  createdAt: number
}

export function deleteTodo(todo: Todo) {
  db.transact(tx.todos[todo.id].delete())
}
