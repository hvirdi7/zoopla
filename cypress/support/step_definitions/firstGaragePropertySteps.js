
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const forSale = require("../../page_objects/for-sale");
const homePage = require("../../page_objects/home-page");


Given("user is on the homescreen and accepts the Cookies", () => {
    forSale.navigateSale();
});

When("the search area filled with {string}", (location) => {
    homePage.enterLocation(location);

});

When ("prices of {string}-{string} for {string} bed max is chosen for {string} house types", (minpricesale, maxpricesale, bed, propertytype) => {
    homePage.selectBedrooms(bed);
    forSale.selectMinPriceSale(minpricesale);
    forSale.selectMaxPriceSale(maxpricesale);
    homePage.selectPropertyType(propertytype);
});

When ("distances of {string} with {string} for {string}", (distance, added, keyword) => {
    forSale.selectDistance(distance);
    forSale.selectAdded(added);
    forSale.selectKeywords(keyword);
    homePage.clickSearch();

}),


Then ("garage proprties appear only", () => {
    forSale.assertGarageProperty();

});