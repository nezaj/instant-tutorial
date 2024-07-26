import { init, id, tx } from '@instantdb/react'

const db = init({ appId: '8530518c-fc2d-4579-8705-748aa18c25c2' })

export function addTodo(text: string) {
  db.transact(
    tx.todos[id()].update({
      text,
      done: false,
      createdAt: Date.now(),
    })
  )
}
