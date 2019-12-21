
import { ADD_ITEM, DELETE_ITEM, FETCH_ITEMS, EDIT_ITEM, SAVE_ITEM } from "./actionTypes";

const initialState = {
  allItems:[],
  selectedItem:{}
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
    case EDIT_ITEM : {
      return{
        ...state,
        selectedItem:state.allItems.find(item =>item.id.toString() === payload)
      }
    }
    case SAVE_ITEM : {
      const saveEditedItem = state.allItems.map(item => {
        if(item.id.toString() !== payload.id) return {...item}
        return  {
          ...item,
           userId:payload.userId,
           title:payload.title
        }
      })
      return{
        ...state,
        allItems:saveEditedItem
      }
    }
    default:
      return state;
  }
  
}

export default itemsReducer