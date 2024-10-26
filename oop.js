PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  const strValue = String(value);

  // Check if the string is a valid positive integer
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

    // Return the wanted formatted data
    return `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;  
}
console.log(todaysDate()); 



class Task  {

  // (title, priority)
}


class ToDo {
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}