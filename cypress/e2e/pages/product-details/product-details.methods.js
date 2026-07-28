import { productDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods{
    static clickOnAddToCartButton(){
        productDetailsElements.buttons.addToCart.click();
    }
}