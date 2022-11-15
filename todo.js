/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  let t = new Date().toISOString().split("T")[0];
  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < t;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === t;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > t;
    });
  };

  const toDisplayableList = (l) => {
    return l
      .map((todo) => {
        d1 = todo.completed ? "[x]" : "[ ]";
        d2 = todo.dueDate == t ? "" : todo.dueDate;

        return `${d1} ${todo.title} ${d2}`;
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

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
