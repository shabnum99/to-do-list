const task_list = document.getElementById("to-do-list");
const new_task_inp = document.getElementById("new-task");
const add_button = document.getElementById("add-button");

add_button.addEventListener("click", () => {
  const task_text = new_task_inp.value.trim();

  if (task_text !== "") {
    const list_item = document.createElement("li");
    list_item.textContent = task_text;

    task_list.appendChild(list_item);
    new_task_inp.value = "";
  }
});
