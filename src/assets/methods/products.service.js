import {componentsData} from "../../components/screens/componentsData.js";

export const productsService = {
    getProductsByRange: function(startIndex, endIndex) {
        const products = [];

        for (let i = startIndex; i <= endIndex; i++) {
            products.push(componentsData[i]);
        }

        return products;
    },
};