module.exports = {
    navigateSale: () => {
        cy.visit('/for-sale/');
        
    },

    selectMinPriceSale: (minpricesale) => {
        cy.get('#forsale_price_min').select(minpricesale);
        },

    selectMaxPriceSale: (maxpricesale) => {
        cy.get('#forsale_price_max').select(maxpricesale);
        },
    
    selectDistance: (distance) => {
        cy.get('#radius').select(distance);
        },
    
    selectAdded: (added) => {
        cy.get('#added').select(added);
        },

    selectSortBy: (sortby) => {
        cy.get('#sort_by').select(sortby);
        },

    selectKeywords: (keyword) => {
        cy.get('#keywords').type(keyword);
        },
        
    assertFirstProperty: () => {
        cy.contains('26 Queen street').should('be.visible');
        },
    
    assertGarageProperty: () => {
        cy.contains('Garage').should('be.visible');
        }
    }