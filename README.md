# Todata - Backend

### Introduction

Today, we'll be making the back end for a simple todo app, which we'll return to later when we have a few more tools under our belt. In the meantime, it's gonna be great practice for our advanced `map` and `filter` tools!

Don't forget, you CAN use `.map` and `.filter`!


### Helper Functions

Remember that each of these will take in just ONE todo object and either return a modified element for the mapping helpers (the first two) or a boolean about that element (the last two).

* `getTodoName`
* `getPriority`
* `isComplete`
* `isHighPriority`
  

### Map Functions

These ones will use the helper functions above (with `.map`!) to return an array of transformed elements. Remember that these will take in an array and return an array, and don't need to have any logic at all. That's what helpers are for!

* `names`
* `priorities`
* `namesAndPriorities`


### Filter Functions

These ones will use the helper functions above (with `.map`!) to return a smaller array of filtered elements. Same note as above re: helper functions! But also: for the last two of them, you might want to create your own helper functions!

* `justComplete`
* `priority2Only`
* `priority1Only`
* `justNotComplete`
