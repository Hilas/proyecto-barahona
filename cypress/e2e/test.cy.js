/// <reference types="Cypress" />

describe('checking things', () => {
    it('check first thing', () => {
        cy.visit('https://www.bolsadesantiago.com/resumen_instrumento/CHILE')

        cy.get('.card-body > .row > :nth-child(1) > .text-muted').then($elem => {
            const precioUtilidad = $elem.text();
            console.log("Precio/Utilidad:", precioUtilidad);
        });

        cy.get('.card-body > .row > :nth-child(2) > .text-muted').then($elem => {
            const utilidadPrecio = $elem.text();
            console.log("Utilidad/Precio:", utilidadPrecio);
        });

        cy.get('.card-body > .row > :nth-child(3) > .text-muted').then($elem => {
            const valorBolsa = $elem.text();
            console.log("Valor Bolsa:", valorBolsa);
        });

        cy.get('.card-body > .row > :nth-child(4) > .text-muted').then($elem => {
            const valorLibro = $elem.text();
            console.log("Valor Libro:", valorLibro);
        });

        cy.get('.card-body > .row > :nth-child(5) > .text-muted').then($elem => {
            const NAV = $elem.text();
            console.log("NAV:", NAV);
        });
    });
});
