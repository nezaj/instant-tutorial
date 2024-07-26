---
type: lesson
title: Delete completed todos
focus: /src/deleteCompleted.ts
---

# Deleting completed todos

```ts add={2-4}
export function deleteCompleted(todos: Todo[]) {
  const completed = todos.filter((todo) => todo.done)
  const txs = completed.map((todo) => tx.todos[todo.id].delete())
  db.transact(txs)
}
```
