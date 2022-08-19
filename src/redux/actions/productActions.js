import * as actionType from "./actionType";



export function getProductsSuccess(products) {
    return { type: actionType.GET_PRODUCTS_SUCCESS, payload: products };
  }
  
  export function getProducts(categoryId) {
    return function (dispatch) {
      let url = "http://localhost:3000/products";

      if (categoryId){
        url= url+"?categoryId="+categoryId
      }

      return fetch(url)
        .then((Response) => Response.json())
        .then((data) => dispatch(getProductsSuccess(data)));
    };
  }