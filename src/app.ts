const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

interface Task {
	name: string;
	done: boolean;
	category?: string;
}

const categories: string[] = ["general", "gym", "work", "hobby"];

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

const render = () => {
	tasksContainerElement.innerHTML = "";
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement("li");
		if (task.category) {
			taskElement.classList.add(task.category);
		}
		const id: string = `task-${index}`;

		const labelElement: HTMLLabelElement = document.createElement("label");
		labelElement.innerText = task.name;
		labelElement.setAttribute("for", id);

		const checkboxElement: HTMLInputElement = document.createElement("input");
		checkboxElement.type = "checkbox";
		checkboxElement.name = task.name;
		checkboxElement.id = id;
		checkboxElement.checked = task.done;
		checkboxElement.addEventListener("change", () => {
			task.done = !task.done;
		});

		taskElement.appendChild(labelElement);
		taskElement.appendChild(checkboxElement);

		tasksContainerElement.appendChild(taskElement);
	});
};

const addTask = (task: Task) => {
	tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
	event.preventDefault();
	addTask({ name: taskNameInputElement.value, done: false });
	render();
});

render();
