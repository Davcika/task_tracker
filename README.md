# taskTracker
This is my first project for roadmap.sh
To use this prototype, make task_tracker_data.jsons file and add square brackets to it --> []
Make folder for .json and .js files and put them in it.

(every word needs to be seperated by comma(,) except when writing description)
Adter executing .js file you can use this commands -->
    add -> add new task (example: add,cook dinner)
    delete -> deletes task (example: delete,2) //deletes task with id: 2
    update -> updates existing task with new description (example: update,2,cook breakfast)
    mark-in-progress -> sets status of a task to "in_progress" (example: mark-in-progress,2)
    mark-done -> sets status of a task to "done" (example: mark-done,2)
    list -> prints out all tasks, can be used together with status to print only tasks with specific status(example: list,done)