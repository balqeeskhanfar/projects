function getday() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy
  return today
}

function login() {
  /*cy.contains('Continue with Google').click()
    cy.contains('Email or phone').type('balqeeskhanfar2@gmail.com')*/
  cy.contains('Email').type('balqeeskhanfar2@gmail.com')
  cy.contains('Password').type('11B$87-4')
  cy.get('button[data-gtm-id="start-email-login"]').click()
}

function newProject(today, color, type) {
  cy.contains('Personal').click()
  cy.get('[id^=edit_project_modal_field_name]').type('Cypress_ToDo_' + today)
  cy.contains('Charcoal').click().contains('Blue').click()
}

describe('Todoist', () => {
  var today = getday()
  var projectColor = ''
  var projectType = ''

  it('End-To-End test', () => {
    cy.visit('https://todoist.com/app/')

    login()
    newProject(today, projectColor, projectType)
  })
})
