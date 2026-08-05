import { CommonPageData } from "../pages/Common-page/common-page.data";
import { CommonPageMethods } from "../pages/Common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/singup.methods";
import { Logger } from "../util/logger";

describe (CommonPageData.testSuites.registroYAuntenticacion, ()=>{
    it("Registro de usuario valido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign up" en la barra de navegacion')
        CommonPageMethods.clickOnSingupOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con informacion valida')
        SignupMethods.insertUsername('djfjf')
        SignupMethods.insertPassword('padndj')

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar al usuario')
        SignupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up  successful."')
        SignupMethods.verifySignupSuccessfulMessageIsDisplayed();
    }); 
});




