
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const logIn = require("../../page_objects/log-in");
const homePage = require("../../page_objects/home-page");
const account = require("../../page_objects/alert-search");


Given("a user is on the signup screen and logs in with {string} and {string}", (email, password) => {
    homePage.navigate();
    logIn.navigateLogin();
    logIn.enterEmail(email);
    logIn.enterPassword(password);
    logIn.clickOnSignIn();

});

When("the email update for london is changed from daily summary emails to Summaries every 3 days", () => {
    account.alertsearchLink();
    account.selectViewSavedSearch();
    account.editSavedSearch();
    account.clickSummariesEvery3daysRadioButton();
    account.clickSavedSearchButtonOnAlerts();

    
});

Then("frequency appears as Summaries every 3 days", () => {
    account.assertFreqEmailUpdate();

});