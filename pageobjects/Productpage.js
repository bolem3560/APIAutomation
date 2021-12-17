
const Page = require('./page');
import webdriverwrapper from '../utils/webdriverutils'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Productpage extends Page {
    /**
     * define selectors using getter methods
     */
    get accceptCookies() { return $('//*[@id="pecr-cookie-banner-wrapper"]/div/div[1]/div/div[2]/button[1]') }
    get searchField() { return $('//*[@id="mobileSearch"]') }
    get searchButton() { return $('//*[@id="search-container"]/form/div/button/div/div') }
    get woodenRampsRacer() { return $('//*[@id="main-content"]/div/div[1]/section/div/article/div[1]/a/div/h2') }
    get addQuantity() { return $('//*[@id="emwbis-anchor"]/div[1]/div/button[2]') }
    get addtoBasket() { return $('//*[@id="button--add-to-basket"]') }
    get gotoBasket() { return $('//*[@id="emwbis-anchor"]/div[3]/div[3]/div/a') }
    get deletefromBasket() { return $("//button[text()='Remove item']") }
    get basketEmpty() { return $('//*[@id="useAtgBasket"]/div[2]/div/h2') }
    get woodenToys() { return $('//*[@id="main-content"]/div/div[2]/section/div/article/div[1]/a/div/h2') }
    get addingToBasket() { return $('//*[@id="main-content"]/div/div[2]/section/div/div/div/div/button[2]') }
    get woodenToyproducts() { return $$('//*[@id="main-content"]/div/div') }
    get woodenProductPage() { return $('//*[@id="main-content"]/div/div[2]/section') }



    cookieBanner() {
        this.accceptCookies.click();
        webdriverwrapper.screencapture();

    }

    searchBox(mobileSearch) {

        webdriverwrapper.fillInput(this.searchField, mobileSearch);
        webdriverwrapper.buttonclick(this.searchButton)

    }

    addMultipleQuantity() {

        webdriverwrapper.waitforelement(this.woodenRampsRacer, 30000);
        webdriverwrapper.screencapture();
        webdriverwrapper.buttonclick(this.woodenRampsRacer)
        webdriverwrapper.waitforelement(this.addQuantity, 30000);
        webdriverwrapper.buttonclick(this.addQuantity)

    }

    addBasket() {
        webdriverwrapper.waitforelement(this.addtoBasket, 30000);
        webdriverwrapper.screencapture();
        webdriverwrapper.buttonclick(this.addtoBasket)
        webdriverwrapper.waitforelement(this.gotoBasket, 30000);
        webdriverwrapper.screencapture();
        webdriverwrapper.scrollelement(this.gotoBasket)
        webdriverwrapper.buttonclick(this.gotoBasket)
    }

    delBasket() {
        webdriverwrapper.waitforelement(this.deletefromBasket, 30000);
        webdriverwrapper.screencapture();
        webdriverwrapper.buttonclick(this.deletefromBasket)

    }

    baskEmpty() {

        webdriverwrapper.waitforelement(this.basketEmpty, 30000);
        webdriverwrapper.screencapture();
        webdriverwrapper.gettext(this.basketEmpty, 'Your basket is empty.');
    }


    open() {
        return super.open();
    }
}

module.exports = new Productpage();
