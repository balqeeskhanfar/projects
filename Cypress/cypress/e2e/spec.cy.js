function changeColor(taskName, color) {
  cy.get(`span[data-bip-original-content='${taskName}']`)
    .parent()
    .within(($form) => {
      cy.get('li[class="tag"]').within(($li) => {
        cy.get('button').click().wait(3000)
        cy.get(`input[value=${color}]`).click({ force: true }).wait(1000)
        cy.get('button').click().wait(3000)
      })
    })
}

function sendListToEmail(email) {
  cy.get('.btn-header').eq(2).click()
  cy.contains('Send email').type(email)
  cy.get('.new_email').click(10, 70)
}

function LogIn(email, password) {
  cy.contains('Log in').click().wait(1000)

  cy.get('[id^=user_email]').type(`${email}`).wait(1000)
  cy.get('[id^=user_password]').type(`${password}`).wait(2000)

  cy.get('input[value="Log in"]').click(2, 2)
}

function creatNewList(taskName, listName) {
  cy.get('.btn-primary').click().wait(3000)

  cy.get('[id^=list_tasks_attributes_0_description]')
    .type(`${taskName}`)
    .wait(1000)
    .type('{enter}')

  cy.get('.best_in_place').first().type(`${listName}`).type('{enter}')
}

function creatNTasks(n) {
  for (var i = 2; i < n + 2; i++) {
    cy.get('[id^=task_description]')
      .type('task ' + i)
      .wait(3000)
    cy.get('[id^=task_description]').type('{enter}').wait(3000)
  }
}

function cloneList(cloneName) {
  cy.get('.btn-header').eq(3).click({ force: true })

  cy.get('span[data-bip-attribute="name"]').type(cloneName).wait(3000)

  cy.get('footer').click(1, 1)
}

function markAllDone() {
  cy.get('ul > li > form.edit_task > label')
    .click({ multiple: true })
    .wait(2000)
}

function deleteAllLists() {
  cy.get('a[id="header-lists-link"]').click().wait(4000)

  var listsCount = 0
  cy.get('ul.lists > li > a.delete-task').then(($Elements) => {
    listsCount = $Elements.length
    cy.log(listsCount)
    deleteLists(listsCount)
  })
}

function deleteLists(listsCount) {
  for (let i = 0; i < listsCount; i++) {
    cy.waitUntil(() =>
      cy.window().then(() => {
        cy.get('ul.lists > li > a.delete-task')
      }),
    )
    cy.get('ul.lists > li > a.delete-task').eq(0).click().wait(2000)
  }
}

function logOut() {
  cy.get('a[data-method="delete"]').first().click().wait(4000)
}

function getday() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy
  return today
}

describe('Cypress Task', () => {
  it('flask', () => {
    var today = getday()

    cy.visit('https://flask.io/new').wait(1000)

    LogIn('Balqeeskhanfar2@gmail.com', '12345678')

    creatNewList('task 1', 'Cypress_Task_' + today)

    creatNTasks(4)

    cy.viewport(600, 750).wait(3000)

    changeColor('task 5', 'green')
    changeColor('task 4', 'blue')
    changeColor('task 3', 'red')

    sendListToEmail('balqeeskhanfar2@gmail.com')

    cloneList('Cypress_second_' + today)

    creatNTasks(1)

    markAllDone()

    deleteAllLists()

    logOut()
  })
})
