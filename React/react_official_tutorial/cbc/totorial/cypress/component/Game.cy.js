import { mount } from 'cypress/react18'
import '@testing-library/cypress/add-commands'
import Game from '../../src/Game'

Cypress.Commands.add('mount', mount)

describe('Game.cy.js', () => {

  it('game', () => {
    cy.mount(<Game />)
    const squares = cy.get('[data-testid="square"]')
  })
  
  it('X win', () => {
    cy.mount(<Game />)
    cy.get('[data-testid="square"]').should('have.length', 9)

    cy.get('[data-testid="square"]').eq(0).click().wait(1000)
    cy.get('[data-testid="square"]').eq(4).click().wait(1000)
    cy.get('[data-testid="square"]').eq(1).click().wait(1000)
    cy.get('[data-testid="square"]').eq(5).click().wait(1000)
    cy.get('[data-testid="square"]').eq(2).click().wait(1000)
  })

  it('O win', () => {
    cy.mount(<Game />)
    cy.get('[data-testid="square"]').should('have.length', 9)

    cy.get('[data-testid="square"]').eq(4).click().wait(1000)
    cy.get('[data-testid="square"]').eq(0).click().wait(1000)
    cy.get('[data-testid="square"]').eq(7).click().wait(1000)
    cy.get('[data-testid="square"]').eq(1).click().wait(1000)
    cy.get('[data-testid="square"]').eq(8).click().wait(1000)
    cy.get('[data-testid="square"]').eq(2).click().wait(1000)
  })

  it('tie', () => {
    cy.mount(<Game />)
    cy.get('[data-testid="square"]').should('have.length', 9)

    cy.get('[data-testid="square"]').eq(0).click().wait(1000)
    cy.get('[data-testid="square"]').eq(4).click().wait(1000)
    cy.get('[data-testid="square"]').eq(1).click().wait(1000)
    cy.get('[data-testid="square"]').eq(2).click().wait(1000)
    cy.get('[data-testid="square"]').eq(5).click().wait(1000)
    cy.get('[data-testid="square"]').eq(3).click().wait(1000)
    cy.get('[data-testid="square"]').eq(6).click().wait(1000)
    cy.get('[data-testid="square"]').eq(7).click().wait(1000)
    cy.get('[data-testid="square"]').eq(8).click().wait(1000)
  })

  it('disaple press in clicked squre', () => {
    cy.mount(<Game />)
    cy.get('[data-testid="square"]').should('have.length', 9)

    cy.get('[data-testid="square"]').eq(0).click().wait(1000)
  })

  it('go to all steps', () => {
    cy.mount(<Game />)
    cy.get('[data-testid="square"]').should('have.length', 9)

    cy.get('[data-testid="square"]').eq(0).click().wait(1000)
    cy.get('[data-testid="square"]').eq(4).click().wait(1000)
    cy.get('[data-testid="square"]').eq(1).click().wait(1000)
    cy.get('[data-testid="square"]').eq(2).click().wait(1000)
    cy.get('[data-testid="square"]').eq(5).click().wait(1000)
    cy.get('[data-testid="square"]').eq(3).click().wait(1000)
    cy.get('[data-testid="square"]').eq(6).click().wait(1000)
    cy.get('[data-testid="square"]').eq(7).click().wait(1000)
    cy.get('[data-testid="square"]').eq(8).click().wait(1000)

    cy.contains('Go to game start').click().wait(1000)
    for(var i=1 ; i<10 ; i++){
      cy.contains('#'+i).click().wait(1000)
    }
  })

})
