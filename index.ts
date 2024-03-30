#!/usr/bin/env node

// Importing necessary modules
import * as readlineSync from 'readline-sync';

// Task interface
interface Task {
    name: string;
    completed: boolean;
}

// TodoApp class
class TodoApp {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    // Function to add a task
    addTask(taskName: string) {
        const newTask: Task = {
            name: taskName,
            completed: false
        };
        this.tasks.push(newTask);
        console.log(`Task "${taskName}" added successfully.`);
    }

    // Function to view all tasks
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
        } else {
            console.log("Tasks:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.name}`);
            });
        }
    }

    // Function to mark a task as completed
    markTaskCompleted(taskIndex: number) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].completed = true;
            console.log(`Task "${this.tasks[taskIndex].name}" marked as completed.`);
        } else {
            console.log("Invalid task index.");
        }
    }

    // Function to delete a task
    deleteTask(taskIndex: number) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            const deletedTask = this.tasks.splice(taskIndex, 1)[0];
            console.log(`Task "${deletedTask.name}" deleted successfully.`);
        } else {
            console.log("Invalid task index.");
        }
    }
}

// Main function
function main() {
    const todoApp = new TodoApp();

    while (true) {
        console.log("\nOptions:");
        console.log("1. Add Task");
        console.log("2. View Tasks");
        console.log("3. Mark Task as Completed");
        console.log("4. Delete Task");
        console.log("5. Exit");

        const choice = readlineSync.question("Enter your choice: ");

        switch (choice) {
            case '1':
                const taskName = readlineSync.question("Enter task name: ");
                todoApp.addTask(taskName);
                break;
            case '2':
                todoApp.viewTasks();
                break;
            case '3':
                const taskIndexToMark = parseInt(readlineSync.question("Enter task index to mark as completed: ")) - 1;
                todoApp.markTaskCompleted(taskIndexToMark);
                break;
            case '4':
                const taskIndexToDelete = parseInt(readlineSync.question("Enter task index to delete: ")) - 1;
                todoApp.deleteTask(taskIndexToDelete);
                break;
            case '5':
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 5.");
        }
    }
}

// Calling main function to start the application
main();
