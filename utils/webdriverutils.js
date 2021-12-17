import cucumberJson from 'wdio-cucumberjs-json-reporter'

class webdriverutils{


    windowHandle(window) {
        var allGUID = browser.getWindowHandles();
        browser.switchToWindow(allGUID[window]);
    }


    browserback() {
        browser.back();
    }

    browserRefresh() {
        browser.refresh();
        try {
            browser.acceptAlert();
        } catch (err) {
            console.error(err);
        }
    }





    windowAlert() {
        try {
            browser.acceptAlert()
        } catch (err) {
            console.error(err);
        }
    }




    waitforelement(locator, value) {

        locator.waitForDisplayed({ timeout: value });

    }

    waitforclickable(locator, value) {

        locator.waitForClickable({ timeout: value });

    }

    screencapture() {
        cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    }



    fillInput(locator, input) {
        locator.setValue(input);

    }

    buttonclick(locator) {
        locator.click();

    }


    selectdropdown(locator, text) {
        locator.selectByVisibleText(text);


    }

 

    clearvalue(locator) {
        locator.clearValue();

    }


    scrollelement(locator) {
        locator.scrollIntoView();

    }



    gettext(locator, expected) {
        const actual = locator.getText();
        console.log(actual)
        expect(locator.getText()).toBe(expected);

    }

    displayed(locator, expectedvalue) {
        const value = locator.isDisplayed();
        expect(value).toBe(expectedvalue);
    }

    selected(locator, expectedvalue) {
        const value = locator.isSelected();
        expect(value).toBe(expectedvalue);
    }

}

module.exports = new webdriverutils();
