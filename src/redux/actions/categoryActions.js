import * as actionType from "./actionType";


export function changeCategory(category) {
  return { type: actionType.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(results) {
  return { type: actionType.GET_CATEGORIES_SUCCESS, payload: results };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((Response) => Response.json())
      .then((data) => dispatch(getCategoriesSuccess(data)));
  };
}
