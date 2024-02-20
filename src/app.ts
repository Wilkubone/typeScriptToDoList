import { Task, Category } from "./types/types";
import { render } from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js"

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "gym", "work", "hobby"];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
	tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
   
	event.preventDefault();
	addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory, });
	render(tasks, tasksContainerElement);
});

addTask({name: "zrobic nogi", category: "gym", done: false, });
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
