# Azure DevOps Integration


Phase 1: pre-requisite & learning:
--

* React server component ( next Generation component).
* NextJS 13 framework ( beta ) [ Next Generation of NEXTJS ]
* Read Docs https://beta.nextjs.org/docs
* useSWR & mutation.
* new Fetch API of nextJS & React.

Phase 2: Azure API utilization.
--

* https://learn.microsoft.com/en-us/rest/api/azure/devops/core/?view=azure-devops-rest-6.0
*  Authorization:
    *  Get API token from Azure devops RestAPI
    *  Put the token in env file
* Projects
    * Create/List/Get/Delete Azure Project
    * List all projects.
    * Create new projects
    * Delete any project.
    * Get any project ( detail project ).
    * click on a project will open the detail project page.
    * button beside the project that will open this project on Azure.
 
* Work items:
    *  Create a work items ( Task, Bug, ...) for the selected project.
    *  https://learn.microsoft.com/en-us/rest/api/azure/devops/processes/work-item-types/list?view=azure-devops-rest-6.0&tabs=HTTP
    *  List all work items for the selected project.
    *  Update an item.
    *  Delete an item.
    *  Get an item ( open the item on Azure).
    *  Optional:
        *  copy/move/replace an item.

* useSWR & mutate for all above.
* use the next API endpoints.
* use the app directory componenet structure (pages).
* you can use tailwind or any componenet based libraray.
* use client component when it is necessary.
* use server component as default.


Phase 3: Upstash History.
--

* Create history page that track user action.
* store these on upstash using redis hash.
* list all these action in history page.


Phase 4: User System:
--
* Use next/auth and create a use login/signIn with google or facebook or github.
* all the above features should work for each user especially the history.
* create login/signup components.




