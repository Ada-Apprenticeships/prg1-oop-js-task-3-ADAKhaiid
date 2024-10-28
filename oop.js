const PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };

function validInteger(value) {
    const strValue = String(value);
    // Check if the string is a valid positive integer using a regex
    const isPositiveInteger = /^\d+$/.test(strValue);
    return isPositiveInteger;  
}

function validatePriority(priority) {
    const value = Number(priority);
    return Object.values(PRIORITY).includes(value) ? value : PRIORITY.LOW; // // If the value is 'Invalid', return LOW priority
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
        this._title = title; 
        this._priority = validatePriority(priority); 
        this._dateToday = todaysDate(); 
    }

    get title() {
        return this._title;
    }
    
    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = validatePriority(value); 
    }

    get dateToday() {
        return this._dateToday;
    }
}

class ToDo {

}

// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}