import { Category } from "../types/types.js";
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task zostal stworzony ${this.createdAt} ${extra || ""}`);
    }
}
