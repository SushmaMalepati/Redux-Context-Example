import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "./redux/actions"

const AddItem = () => {
    const randomID = Math.round(Math.random()*100)
    const [userId, setUserId] = useState(randomID);
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const dispatch = useDispatch()


    const onChangeHandlerUserId = e => setUserId(e.target.value)
    const onChangeHandlerId = e => setId(e.target.value)
    const onChangeHandlerTitle = e => setTitle(e.target.value)

    const handleClick = () => dispatch(addItem({
      userId,
      id,
      title
    }))

    return (
    <div style={{background:"#F8F8F8"}}>
        <input type="text" onChange = {onChangeHandlerUserId} value={userId} required/>
        <input type="text" onChange = {onChangeHandlerId} value={id} required/>
        <input type="text" onChange = {onChangeHandlerTitle} value={title} required/>
        <button onClick={handleClick}>Add</button>
    </div>
    );
}

export default AddItem;