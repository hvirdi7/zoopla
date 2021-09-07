
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePage = require("../../page_objects/home-page");
const logIn = require("../../page_objects/log-in");
const account = require("../../page_objects/alert-search");

Given("user is on the zoopla my account screen after logging in with {string} and {string}", (email, password) => {
    homePage.navigate();
    logIn.navigateLogin();
    logIn.enterEmail(email);
    logIn.enterPassword(password);
    logIn.clickOnSignIn();

});

When("saved properties are clicked", () => {
    account.clickSavedSearches();

});

Then("strictly saved properties appear", () => {
    account.assertSavedPropertiesAppear();

});