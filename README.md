# Todata - Backend

### Introduction

Today, we'll be making the back end for a simple todo app, which we'll return to later when we have a few more tools under our belt. In the meantime, it's gonna be great practice for our advanced `.map` and `.filter` tools!


### Helper Functions

Remember that each of these will take in just ONE todo object and either return a modified element for the mapping helpers (the first two) or a boolean about that element (the last two). This is the main work you'll have to do!

* `getTodoName`
* `getPriority`
* `isComplete`
* `isHighPriority`
  

### Map Functions

These ones will use the helper functions above (with `.map`!) to return an array of transformed elements. Remember that these will take in an array and return an array, and don't need to have any logic at all. Instead, you'll be taking in an array, giving its `.map` function the right helper function, and returning the result.

You should probably come up with your own helper function for the last one!

* `names`
* `priorities`
* `namesAndPriorities`


### Filter Functions

These ones will use the helper functions above (with `.filter`!) to return a smaller array of filtered elements. Again, no need to write any logic... just take in an array, give its `.filter` function the right helper function, and return the result!

For the last two of them, you might want to create your own helper functions! That is, we don't have tests for them, but you can still make them. It's a free country!

* `justComplete`
* `priority2Only`
* `priority1Only`
* `justNotComplete`
