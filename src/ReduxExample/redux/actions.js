import {ADD_ITEM, DELETE_ITEM, FETCH_ITEMS} from "./actionTypes"


export const getAllItems = () => async dispatch => {
    const allItems = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())
    dispatch({
        type: FETCH_ITEMS, payload: allItems
      })  
};
  
export const addItem = addObj => ({
    type:ADD_ITEM,
    payload:addObj
})

export const deleteItem = deleteId => ({
    type:DELETE_ITEM,
    payload:deleteId
})