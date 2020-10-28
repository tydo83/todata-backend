/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(toDolist) {
  return toDolist.text;
}

const getPriority = function(toDolist) {
  return toDolist.priority;
}

const isComplete = function(toDolist) {
  return toDolist.complete;
}

const isHighPriority = function(toDolist) {
  return toDolist.priority === 2;
}

const getNamesAndPriorities = function(toDolist) {
  let highAndLow = toDolist.priority == 2 ? 'High' : 'Low'; 
  return `${toDolist.text} - ${highAndLow}`;
}

const priority1OnlyHelper = function(toDolist) {
  return toDolist.priority === 1;
}

const justNotCompleteHelper = function(toDolist) {
  return !toDolist.complete;
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(toDolist) {
  return toDolist.map(getTodoName);  
}

const priorities = function(toDolist) {
  return toDolist.map(getPriority);
}

const namesAndPriorities = function(toDolist) {
  return toDolist.map(getNamesAndPriorities);
}

const justComplete = function(toDolist) {
  return toDolist.filter(isComplete);
}

const priority2Only = function(toDolist) {
  return toDolist.filter(isHighPriority);
}

const priority1Only = function(toDolist) {
  return toDolist.filter(priority1OnlyHelper);
}

const justNotComplete = function(toDolist) {
  return toDolist.filter(justNotCompleteHelper);
}

// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justComplete,
  priority2Only,
  priority1Only,
  justNotComplete,
}
