/// <reference types="Cypress" />

describe('checking things', () => {
    it('Get Relaciones', () => {
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

    it('Get Ultimas variaciones de capital', () => {
        cy.visit('https://www.bolsadesantiago.com/resumen_instrumento/CHILE')

        const datosTabla = []; // Array para almacenar los datos de cada fila

        cy.get('#price-last-1 > table > tbody > tr').each(($fila) => {
            const datosFila = {}; // Objeto para almacenar los datos de esta fila

            cy.wrap($fila).find('td').each(($celda, indice) => {
                cy.wrap($celda).invoke('text').then((textoCelda) => {
                    // Añade el texto de cada celda al objeto de la fila
                    datosFila[`Columna ${indice + 1}`] = textoCelda.trim();
                });
            }).then(() => {
                datosTabla.push(datosFila); // Añade los datos de la fila al array de la tabla
            });
        }).then(() => {
            console.table(datosTabla); // Imprime la tabla en la consola
        });
    });
});
