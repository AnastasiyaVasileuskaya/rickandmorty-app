import React from 'react'
import Card from './Card'

describe('<Card />', () => {
    it('mounts', () => {
        const setLikedSpy = cy.spy().as('setLikedSpy')
        cy.mount(<Card id={3} name={'ricky'} status={'alive'} gender={'male'} isLiked={false} setLiked={setLikedSpy} />)
        cy.get('[data-cy=card-name]').should('have.text', 'ricky')
        const cardButton = cy.get('[data-cy=card-button]')
        cardButton.should('have.text', 'Show details')
        cardButton.click()
        cardButton.should('have.text', 'Hide details')
        cy.get('[data-cy=card-status]').should('include.text', 'alive')
        cy.get('[data-cy=card-gender]').should('include.text', 'male')

        cy.get('[data-cy=like]').click()
        cy.get('@setLikedSpy').should('have.been.calledOnce')
        cy.get('@setLikedSpy').should('have.been.calledWith', 2)
    })
})
