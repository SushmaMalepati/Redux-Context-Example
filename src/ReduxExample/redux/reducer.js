
import { ADD_ITEM,DELETE_ITEM,FETCH_ITEMS } from "./actionTypes";

const initialState = {
  allItems:[]
};

const  itemsReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case FETCH_ITEMS: {
      const allItems = payload.filter(i => i.id <= 10)
      return {
        ...state,
        allItems
      };
    }
    case ADD_ITEM : {
      return{
        ...state,
        allItems:state.allItems.concat(payload)
      }
    }
    case DELETE_ITEM : {
      return{
        ...state,
        allItems:state.allItems.filter(item =>item.id.toString() !== payload)
      }
    }
    default:
      return state;
  }
  
}

export default itemsReducer