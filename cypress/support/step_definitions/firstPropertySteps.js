
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const forSale = require("../../page_objects/for-sale");
const homePage = require("../../page_objects/home-page");


Given("a user is on the homescreen and accepts the Cookie Policy", () => {
    forSale.navigateSale();
});

When("the search area filled with {string}", (location) => {
    homePage.enterLocation(location);

});

When ("prices of {string}-{string} for {string} bed max is chosen for {string} house type", (minpricesale, maxpricesale, bed, propertytype) => {
    homePage.selectBedrooms(bed);
    forSale.selectMinPriceSale(minpricesale);
    forSale.selectMaxPriceSale(maxpricesale);
    homePage.selectPropertyType(propertytype);
    
});

When ("distance of {string} with {string} for {string}", (distance, added, sortby) => {
    forSale.selectDistance(distance);
    forSale.selectAdded(added);
    forSale.selectSortBy(sortby);
    homePage.clickSearch();

}),

Then("26 Queen street, croydon appears as the first result", () => {
    forSale.assertFirstProperty();

});