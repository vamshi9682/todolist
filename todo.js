/* eslint-disable no-undef */

const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  const yesterday = new Date(today.getTime() - 1 * oneDay);
  const tomorrow = new Date(today.getTime() + 1 * oneDay);
  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate <= yesterday;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate >= tomorrow;
    });
  };

  const toDisplayableList = (l) => {
    return l
      .map((todo) => {
        x = todo.completed ? "[x]" : "[ ]";
        y =
          todo.dueDate == new Date().toISOString().split("T")[0]
            ? ""
            : todo.dueDate;

        return `${x} ${todo.title} ${y}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
