/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing my todo list", () => {
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
    listOfTodos.filter((todo) => {
      return todo.dueDate < new Date().toISOString().split("en-CA");
    });
    expect(
      listOfTodos.every(() => {
        return true;
      })
    ).toBe(true);
  });

  test("A test that checks retrieval of all todos that are dueToday", () => {
    let listOfTodos = dueToday();
    listOfTodos.filter((todo) => {
      return todo.dueDate === new Date().toISOString().split("en-CA");
    });
    expect(
      listOfTodos.every(() => {
        return true;
      })
    ).toBe(true);
  });

  test("A test that checks retrival of all todos that are dueLater", () => {
    let listOfTodos = dueLater();
    listOfTodos.filter((todo) => {
      return todo.dueDate > new Date().toISOString().split("T")[0];
    });
    expect(
      listOfTodos.every(() => {
        return true;
      })
    ).toBe(true);
  });
});
