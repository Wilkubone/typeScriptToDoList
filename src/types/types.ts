export interface Task {
	name: string;
	done: boolean;
	category?: Category;
}

export type Category = "general"| "gym" | "work" | "hobby";
