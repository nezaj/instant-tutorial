---
type: lesson
title: Add todo
focus: /src/addTodo.ts
---

# Adding a todo

```ts add={2-8}
export function addTodo(text: string) {
  db.transact(
    tx.todos[id()].update({
      text,
      done: false,
      createdAt: Date.now(),
    })
  )
}
```
