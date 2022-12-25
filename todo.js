/* eslint-disable no-unused-vars */
const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const today = new Date().toLocaleDateString("en-CA");
  const overdue = () => {
    return all.filter(
      (l) => l.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (x) => new Date().toLocaleDateString("en-CA") == x.dueDate
    );
  };

  const dueLater = () => {
    return all.filter(
      (x) => x.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    return list
      .map((todos) => {
        const complete = todos.completed ? "x" : " ";
        return `[${complete}] ${todos.title} ${
          todos.dueDate == new Date().toLocaleDateString("en-CA")
            ? ""
            : todos.dueDate
        }`;
      })
      .join("\n").trim();
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};
module.exports = todoList;
