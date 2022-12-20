/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, dueToday, dueLater, overdue } = todoList();
const today = new Date();
const oneDay = 60 * 60 * 24 * 1000;
const yesterday = new Date(today.getTime() - 1 * oneDay);
const tomorrow = new Date(today.getTime() + 1 * oneDay);

describe("Todolist test suite", () => {
  test("Todo that checks creating a new todo", () => {
    const Count = all.length;
    expect(all.length).toBe(Count);
    add({
      title: "A new Todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(Count + 1);
  });

  test("Todo that checks marking a todo as completed.", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Todo that checks retrieval of overdue items.", () => {
    const Over_due = overdue().every(
      (item) => item.dueDate <= yesterday.toLocaleDateString("en-CA").trim()
    );
    expect(Over_due).toEqual(true);
  });

  test("Todo that checks retrieval of due today items.", () => {
    const chectoday = dueToday().every(
      (item) => item.dueDate === today.toLocaleDateString("en-CA").trim()
    );
    expect(chectoday).toEqual(true);
  });

  test("Todo that checks retrieval of due later items.", () => {
    const due_Later = dueLater().every(
      (item) => item.dueDate >= tomorrow.toLocaleDateString("en-CA").trim()
    );
    expect(due_Later).toEqual(true);
  });
});
