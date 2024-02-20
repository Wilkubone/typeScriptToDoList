import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
	Category.GENERAL,
	Category.GYM,
	Category.WORK,
	Category.HOBBY,
	Category.SOCIAL,
];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
	tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
	selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
	event.preventDefault();
	addTask({
		name: taskNameInputElement.value,
		done: false,
		category: selectedCategory,
	});
	renderTasks(tasks, tasksContainerElement);
});

addTask({ name: "zrobic nogi", category: Category.GYM, done: false });
renderCategories(
	categories,
	categoriesContainerElement,
	updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);
