---
type: lesson
title: Toggle multiple todos
focus: /src/toggleAll.ts
---

# Toggle todos

```ts add={2-3}
export function toggleAll(todos: Todo[]) {
  const newVal = !todos.every((todo) => todo.done)
  db.transact(todos.map((todo) => tx.todos[todo.id].update({ done: newVal })))
}
```
