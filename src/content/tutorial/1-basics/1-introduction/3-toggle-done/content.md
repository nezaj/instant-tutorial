---
type: lesson
title: Toggle todos
focus: /src/toggleTodo.ts
---

# Toggle a todo

```ts add={2}
export function toggleTodo(todo: Todo) {
  db.transact(tx.todos[todo.id].update({ done: !todo.done }))
}
```
