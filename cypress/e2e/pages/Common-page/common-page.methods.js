import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.Url);
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.AboutUs.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.Cart.click();
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.Login.click();
    }

    static clickOnSingupOption(){
        CommonPageElements.topMenu.Signup.click();
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
}