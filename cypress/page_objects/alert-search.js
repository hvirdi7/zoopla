
module.exports = {
    alertsearchLink: () => {
        cy.get('a[data-ga-label="account menu>alerts & searches"]').click({force: true});
    },

    enterEmail: (email) => {
        cy.get('#input-email-address').click({force: true}).type(email);

    },

    enterPassword: (password) => {
        cy.get('#input-password').click({force: true}).type(password);
    
    },  

    //selectSummaryEmails: (summaryemail) => {
      //  cy.get(['#alert-25862258 option:nth-child(4)').select(summaryemail);
      //  },

    selectViewSavedSearch: () => {
        cy.get('[href="/for-sale/property/london/croydon/queen-street/?q=26%20queen%20street%2C%20croydon&radius=0&search_source=refine&section=for-sale&user_alert_id=25862258&view_type=list"]').click({force: true});
    },   

    editSavedSearch: () => {
        cy.get('[data-testid=edit-search] > .css-1xcqjvt-Text-TabletText').click({force: true});
    },

    assertFreqEmailUpdate: () => {
        cy.contains('Summaries every 3 days').should('be.visible');
    },

    clickCreateEmailAlerts: () => {
        cy.get(`a[data-testid="create-email-alert-button"]`).should('be.visible').click({force: true});
     
    },
    
    clickSavedSearches:() => {
        cy.get(`a[data-ga-label="account menu>favourite properties"]`).click({force: true});

    },

    clickSavedSearchButtonOnAlerts:() => {
        cy.get('button').contains('Save search').click({force: true});
    },

    assertDailyUpdateSuccess: (success) => {
        cy.contains(success).should('be.visible');
    },    
    
    clickDailySummaryEmailsRadioButton:() => {
        cy.get('#frequency_1').click({force: true});
    },

    clickSummariesEvery3daysRadioButton:() => {
        cy.get('#frequency_3').click({force: true});
    },

    assertSavedPropertiesAppear: () => {
        cy.contains('1 property').should('be.visible');
    },    

    //clickSaveSearchLink:() => {
     //   cy.get(`[class="css-1omlg2j-ButtonLink-Button-ButtonLinkWithIcon-AlertPanelButtonLink evvt7lo2"]`).eq(1).should('be.visible').click();
    //},

    }