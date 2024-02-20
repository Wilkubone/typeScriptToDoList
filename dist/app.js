import { render } from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "gym", "work", "hobby"];
const tasks = [
    {
        name: "Wyrzucic smieci",
        done: false,
        category: "hobby",
    },
    {
        name: "Pojsc na silke",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmic psa",
        done: false,
        category: "work",
    },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory, });
    render(tasks, tasksContainerElement);
});
addTask({ name: "zrobic nogi", category: "gym", done: false, });
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
