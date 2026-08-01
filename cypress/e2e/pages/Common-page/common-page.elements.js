export class CommonPageElements{
    static get topMenu(){
        return {
            get home() {
                return cy.get('li.active a')
            },

            get contact() {
                return cy.get('a[data-target="#exampleModal"]');
            },

            get aboutUs() {
                return cy.get('a[data-target="#videoModal"]');
            },

            get Cart() {
                return cy.contains('a', 'Cart');
            },

            get Login() {
                return cy.get('a[data-target="#logInModal"]');
            },

            get Signup() {
                return cy.get('a[data-target="#signInModal"]')
            },
        }

    }
}