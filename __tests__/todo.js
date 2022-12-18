/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, dueToday, dueLater, overdue } = todoList();
const today = new Date();
const oneDay = 60 * 60 * 24 * 1000;
const yesterday = new Date(today.getTime() - 1 * oneDay);
const tomorrow = new Date(today.getTime() + 1 * oneDay);
today.toLocaleDateString("en-CA");
yesterday.toLocaleDateString("en-CA");
tomorrow.toLocaleDateString("en-CA");
describe("Todolist test suite", () => {
  beforeAll(() => {
    add({ title: "Submit assignment", dueDate: yesterday, completed: false });
    add({ title: "Pay rent", dueDate: today, completed: true });
    add({ title: "Service Vehicle", dueDate: today, completed: true });
    add({ title: "File taxes", dueDate: yesterday, completed: true });
    add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  });

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
    const Over_due = overdue().filter(
      (todo) => todo.dueDate < new Date().toLocaleDateString("en-CA")
    );
    expect(Over_due.every((i) => i.dueDate)).toEqual(true);
  });

  test("Todo that checks retrieval of due today items.", () => {
    const chectoday = dueToday().filter(
      (todo) => todo.duetoday === new Date().toLocaleDateString("en-CA")
    );
    expect(chectoday.every((i) => i.dueDate)).toEqual(true);
  });

  test("Todo that checks retrieval of due later items.", () => {
    const due_Later = dueLater().filter(
      (todo) => todo.dueDate > new Date().toLocaleDateString("en-CA")
    );
    expect(due_Later.every((i) => i.dueDate)).toEqual(true);
  });
});
