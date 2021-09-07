module.exports = {
    navigate: () => {
        cy.visit('/to-rent/');
        
    },
    enterLocation: (location) => {
        cy.get(`input[id='search-input-location']`).should('be.visible').click({force: true}).type(location);
        cy.contains('Advanced search options').click({force: true});

    },
    selectMinPrice: (minprice) => {
        cy.get('#rent_price_min_per_month').select(minprice);
        },

    selectMaxPrice: (maxprice) => {
        cy.get('#rent_price_max_per_month').select(maxprice);
        },
    
    selectBedrooms: (bed) => {
        cy.get('#beds_min').select(bed);
        },
    
    selectPropertyType: (propertytype) => {
        cy.get('#property_type').select(propertytype);
        },

    clickSearch: () => {
        cy.get('#search-submit').click({force: true});
        },
    
    clickSignInHome: () => {
        cy.get(`a[data-testid="register-page-header-sign-in-link"]`).click({force: true});
        },
    
    clickAcceptCookies: () => {
        cy.contains('Accept all cookies').should('be.visible').click({force: true});
    }
    }