import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editItems, SaveEditedItem } from "./redux/actions";
import get from "lodash/get";

const EditItems = () => {
    const selectedItem = useSelector(state => state.itemsReducer.selectedItem)
    const [id, setId] = useState("Select Item");
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const dispatch = useDispatch()
    const allItems = useSelector(state => state.itemsReducer.allItems)

    const onChangeHandlerUserId = ({ target: { value } }) => setUserId(Number(value))
    const onChangeHandlerId = ({target:{value}}) => setId(value)
    const onChangeHandlerTitle = ({target:{value}}) => setTitle(value)


    useEffect(() => {
        setUserId(get(selectedItem,"userId",""));
        setTitle(get(selectedItem,"title",""));
    },[selectedItem])

    const handleItemEdit = () => dispatch(editItems(id))

    const handleSaveItem = () => {
        dispatch(SaveEditedItem({
            id,
            title,
            userId
        }))
    }

    return (
    <div style={{background:"#F8F8F8"}}>
        <select type="text" onChange = {onChangeHandlerId} value={id}>
        {allItems.map(item => <option>{item.id}</option>)}
        </select>
        <button onClick={handleItemEdit}>Edit</button>
        <br />
        <input type="text" onChange = {onChangeHandlerUserId} value={userId} />
        <input type="text" onChange = {onChangeHandlerTitle} value={title} />
        <button onClick={handleSaveItem}>Save Changes</button>
    </div>
    );
}

export default EditItems;