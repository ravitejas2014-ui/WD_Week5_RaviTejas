
MY WEEK 5 PROJECT - SIMPLE TO-DO LIST WEBSITE

This is a simple To-Do List website that I made for my Week 5 Web Development Assignment. You can type tasks, add them to a list, check them off when done, and delete them. It also has a dynamic task counter and a dark mode toggle.

FEATURES IN MY WEBSITE :

• Adding Tasks: Type a task in the box and click "Add Task" or press the Enter key.
• Dynamic Counter: Shows the total number of tasks automatically using a JavaScript array.
• Mark as Done: Click any task text to cross it out (adds a line-through style).
• Delete Button: Every task has its own red button to remove it completely.
• Dark Mode: A button at the top that switches the website theme between dark and light mode.
• Cool Styling: Floating motivation cards and an animated bubble background.

TECHNOLOGIES USED :

• HTML: For the text box, buttons, headers, and the task list structure.
• CSS: For centering everything, the dark mode colors, and smooth animations.
• JavaScript: For handling clicks, loops, the array of objects, and changing the text on the screen.

JAVASCRIPT CONCEPTS I USED :

• Variables & Selectors: Used document.getElementById to grab buttons and inputs.
• Array of Objects: Stored my tasks inside an array where each task has a name and a completed status (true/false).
• For Loops: Used a standard loop to go through the array and print out the list items dynamically.
• Event Listeners: Listened for clicks on the buttons and keydown for the Enter key.
• Splice Method: Used tasks.splice() to delete the exact item I wanted from the array.

PROBLEMS I FACED & HOW I FIXED THEM :

• PROBLEM 1 (The Double Click Problem):
When I clicked the "Delete" button, it would delete the task but also accidentally trigger the "Mark as Done" click on the row. I fixed this by using event.stopPropagation() inside the delete button code to stop the click from bubbling up.
• PROBLEM 2 (Empty Tasks):
If I left the box empty and clicked add, it would still add a blank bullet point. I fixed this by adding an "if" condition with .trim() to check if the box is empty and alert the user.

IDEAS FOR THE FUTURE

• Use LocalStorage so the tasks stay saved even if you refresh the browser page.
• Add an edit button to fix spelling mistakes on a task.
