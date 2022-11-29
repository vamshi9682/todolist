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
