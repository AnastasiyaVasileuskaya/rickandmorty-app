import React from 'react'
import Header from './Header'

describe('<Header />', () => {
    it('mounts', () => {
        cy.mount(<Header title={'The Rick and Morty App'} color={'rgb(173, 216, 230)'} />)
        const header = cy.get('[data-cy=header]')
        header.should('have.css', 'backgroundColor', 'rgb(173, 216, 230)')
        header.should('have.text', 'The Rick and Morty App')
    })
})
