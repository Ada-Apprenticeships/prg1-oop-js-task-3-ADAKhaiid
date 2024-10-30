const PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };

function validInteger(value) {
    const strValue = String(value);
    // Check if the string is a valid positive integer using a regex
    const isPositiveInteger = /^\d+$/.test(strValue);
    return isPositiveInteger;  
}

function validatePriority(priority) {
    // Changes priority to an Integer
    const value = Number(priority);
    // If the value is 'Invalid', return LOW priority using a conditional statement 
    return Object.values(PRIORITY).includes(value) ? value : PRIORITY.LOW;
}

function todaysDate() {
  // Sets the Current Time
  const currentTime = new Date();

  // Getting the wanted formatted date
  // .padStart(2, "0") is used to add a 0 to single digits
  const day = String(currentTime.getDate()).padStart(2, '0');
  const month = String(currentTime.getMonth() + 1).padStart(2, '0');
  const year = currentTime.getFullYear();
  
  // Getting the current time
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  
  // Return the wanted formatted data
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

class Task {
  constructor(title, priority) {
      // Creates a task title
      this._title = title; 
      // Sets the priority level of the task
      this._priority = validatePriority(priority); 
      // Sets the date and time when the task was added
      this._added = todaysDate(); 
  }

  get title() {
      return this._title;
  }
  
  get priority() {
      return this._priority;
  }

  get added() {
      return this._added;
  }

  set priority(value) {
    this._priority = validatePriority(value); 
  }
}

class ToDo {
  constructor() {
      // Creates an array to hold the tasks
      this.tasks = []; 
  }

  // Adding a task to the array
  add(task) {
      // Check if the task is an instance of the Task class
      if (task instanceof Task) {
          // Adds the task to the tasks array & return the it's length 
          this.tasks.push(task);
          return this.tasks.length; 
      }
      // Throw an error if the added ask is not a Task instance
      throw new Error("Only instances of Task can be added.");
  }

  // Remove a task from the array
  remove(title) {
      // Finds the index of the task with the specified title
      const index = this.tasks.findIndex(task => task.title === title);
      if (index !== -1) {
          // Removes the task if found and returns true
          this.tasks.splice(index, 1);
          return true;
      }
      // Returns false if the task was not found
      return false; 
  }

  // Listing tasks through filtering by priority 
  list(priority = 0) {
      if (priority === 0) {
          // Returns all tasks with if no priority is specified
          return this.tasks.map(task => [task.added, task.title, task.priority]); 
      }
      // Filters tasks by specified priority and returns key information
      return this.tasks
      .filter(task => task.priority === priority)
      .map(task => [task.added, task.title, task.priority]); 
  }

  // Retrieving a single task by title
  task(title) {
      // Finds & returns the task with the matching title
      const task = this.tasks.find(task => task.title === title);
      if (task) {
          return task; 
      }
      // Throws an error if no task with the specified title is found
      throw new Error(`Task '${title}' Not Found`);
  }
}

// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}