/* eslint-disable no-undef */
const todoList = require("../todo");
let t = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing my todo list", () => {
  beforeAll(() => {
    add({
      title: "Data Mining Methods",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("A test that checks creating a new todo", () => {
    //expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "node js learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("A test that checks Marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("A test that checks retreival of all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < t;
      })
    ).toBe(true);
  });

  test("A test that checks retrieval of all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === t;
      })
    ).toBe(true);
  });

  test("A test that checks retrival of all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > t;
      })
    ).toBe(true);
  });
});
