PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  const strValue = String(value);
  // Check if the string is a valid positive integer using a regex
  const isPositiveInteger = /^\d+$/.test(strValue);  
  return isPositiveInteger;
}  

function validatePriority(priority) { // value can be a string or a number (integer)
  const strValue = String(priority);

  // Check for valid priority values
  if (strValue === '1' || strValue.toUpperCase() === 'LOW') {
      return PRIORITY.LOW;
  } 
  else if (strValue === '3' || strValue.toUpperCase() === 'MEDIUM') {
    return PRIORITY.MEDIUM;
  } 
  else if (strValue === '5' || strValue.toUpperCase() === 'HIGH') {
    return PRIORITY.HIGH;
  } 
  else if (strValue === '7' || strValue.toUpperCase() === 'URGENT') {
    return PRIORITY.URGENT;
  } 
  else {
    // If the value is 'invalid', return LOW priority
    return PRIORITY.LOW;
  }
}

function todaysDate () {
    // Sets the Current Time
    const currentTime = new Date();
    // Getting the wanted formatted date
    const day = String(currentTime.getDate()).padStart(2, "0")
    const month = String(currentTime.getMonth() + 1).padStart(2, "0")
    const year = currentTime.getFullYear()
    // Getting the current time
    const hours = String(currentTime.getHours()).padStart(2, "0")
    const minutes = String(currentTime.getMinutes()).padStart(2, "0")
    const seconds = String(currentTime.getSeconds()).padStart(2, "0")
    // Return the wanted formatted data
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}




class Task  {

  // (title, priority)
}


class ToDo {
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}