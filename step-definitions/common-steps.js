const { Given, When, Then } = require('@wdio/cucumber-framework');
import productpage from '../pageobjects/Productpage'



Given(/^Open application url$/, () => {
    productpage.open();
});

When(/^accepts the cookie banner$/, () => {
    productpage.cookieBanner();
});

Then(/^browses for any product$/, () => {
    productpage.searchBox();
});

Then(/^browses for product (.+)$/, (mobilesearch) => {
    productpage.searchBox(mobilesearch);
});


When(/^selects multiple quantities of that product$/, () => {
    productpage.addMultipleQuantity();
});

When(/^add the selected product to basket$/, () => {
    productpage.addBasket();
});


When(/^Delete product from basket$/, () => {
    productpage.delBasket();
});

Then(/^Verify the Basket Empty page$/, () => {
    productpage.baskEmpty();
});







