- Level: Easy.

* ## Phase 1: Git Recap & Cypress.

  - clone/setup the repo and reacp the main Git commands.
  - learn about Cypress and how to access and manipulate DOM using it.
  - https://www.cypress.io/

* ## Phase 2: Task list End-To-End test.

  - Write a Cypress test that do:
    - login to https://flask.io/ via Email.
    - create your first task.
    - rename the task list to be `Cypress_Task_<today_datetime>`
    - create more tasks.
    - color task first with green, second with blue and the third with red.
    - share the task list with your email.
    - clone the task list and rename it to `Cypress_second_<today_datetime>`
    - create another task in the duplicated.
    - mark all the task as done.
    - delete all the tasks lists
    - logout

* ## Phase 3: Todoist End-To-End test. (optional)
  - Write a Cypress test that do:
    - login to https://todoist.com/ using google.
    - create a new project called `Cypress_ToDo_<today_datetime>` with a green/blue color.
    - choose the type of the project to be board.
    - create 3 sections `( 'toDo', 'in-progress', 'done' )`
    - create 5 tasks with diffrent priority in each on of them.
    - move the last one in `to do` section to `in-progress`.
    - move the first one in the `in-progress` section to `done` section.
    - add comment to the first one in the ``to do` secion.
    - add a sub-task to the one in the middel of secion `in-progress`.
    - remove the project.
    - logout.
* ## pushes and code review:
  - evey project we do from now on we will do it in a new branch and in the end we will merge it with the dev branch.
  - evey 3 subtask from above should be in a sepreted push.
  - open a Pull Request on the Dev branch with a code review.
* ## Reacquired files:
  - Achievement files.
  - all the task files.
