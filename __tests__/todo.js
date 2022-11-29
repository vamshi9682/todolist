/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const today = new Date();
const oneDay = 60 * 60 * 24 * 1000;
today.toLocaleDateString("en-CA");
const yesterday = new Date(today.getTime() - 1 * oneDay);
const tomorrow = new Date(today.getTime() + 1 * oneDay);
const all_elements = [];
describe("Testing my todo list", () => {
  test("A test that checks creating a new todo", () => {
    expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "node js learning",
      completed: false,
      dueDate: today,
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
    for (var i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].dueDate <= yesterday) {
        all_elements.push(listOfTodos[i]);
      }
    }
    expect(
      all_elements.every(() => {
        return true;
      })
    ).toBe(true);
  });

  test("A test that checks retrieval of all todos that are dueToday", () => {
    let listOfTodos = dueToday;
    for (var i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].dueDate === today) {
        all_elements.push(listOfTodos[i]);
      }
    }
    expect(
      all_elements.every((todo) => {
        return true;
      })
    ).toBe(true);
  });

  test("A test that checks retrival of all todos that are dueLater", () => {
    let listOfTodos = dueToday;
    for (var i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].dueDate >= tomorrow) {
        all_elements.push(listOfTodos[i]);
      }
    }
    expect(
      all_elements.every((todo) => {
        return true;
      })
    ).toBe(true);
  });
});
