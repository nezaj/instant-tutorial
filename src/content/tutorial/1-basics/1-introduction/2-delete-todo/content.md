---
type: lesson
title: Delete todo
focus: /src/deleteTodo.ts
---

# Delete a todo

```ts add={2}
export function deleteTodo(todo: Todo) {
  db.transact(tx.todos[todo.id].delete())
}
```
