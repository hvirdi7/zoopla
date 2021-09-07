
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePage = require("../../page_objects/home-page");
const account = require("../../page_objects/alert-search");
const logIn = require("../../page_objects/log-in");

Given("a user is on the homescreen and accepts the Cookie Policies", () => {
    homePage.navigate();
});

When("the search area is filled with {string}", (location) => {
    homePage.enterLocation(location);
});

When ("price of {string}-{string} for {string} bed max is chosen for {string} house types", (minprice, maxprice, bed, propertytype) => {
    homePage.selectMinPrice(minprice);
    homePage.selectMaxPrice(maxprice);
    homePage.selectBedrooms(bed);
    homePage.selectPropertyType(propertytype);
    homePage.clickSearch();
    
});

Then("user registers for daily email alerts with {string} for {string} password {string}", (success, email, password) => {
     account.clickCreateEmailAlerts();
     homePage.clickSignInHome();
     logIn.enterEmail(email);
     logIn.enterPassword(password);
     logIn.clickOnSignIn();
     account.clickDailySummaryEmailsRadioButton();
     account.clickSavedSearchButtonOnAlerts();
     account.assertDailyUpdateSuccess(success);
});