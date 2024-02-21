import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.WORK,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    {
        name: "Wyrzucic smieci",
        done: false,
        category: Category.HOBBY,
    },
    {
        name: "Pojsc na silke",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmic psa",
        done: false,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
const task = [
    "zrobic klatke",
    Category.GYM,
    false,
];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
