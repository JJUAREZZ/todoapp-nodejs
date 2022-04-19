const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const TaskRepository = require("./repositories/TaskRepository");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = "";

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const newTask = await inquirerInput("Task Title to add: ");
        taskRepository.createTask(newTask);
        break;

      case 2:
        const allTasks = taskRepository.getAllTask();
        console.log(allTasks);
        break;
      case 3:
        const deleteTask = await inquirerInput("Task Title to delete:");
        taskRepository.deleteTask(deleteTask);
        break;
    }
  } while (option !== "X");
};

main();
