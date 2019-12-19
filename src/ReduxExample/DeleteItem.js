import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteItem } from "./redux/actions"

const DeleteItem = () => {
    const [id, setId] = useState("");
    const dispatch = useDispatch()

    const onChangeHandlerId = e => setId(e.target.value)

    const handleClick = () => dispatch(deleteItem(id))

    return (
    <div style={{background:"#F8F8F8"}}>
        <input type="text" onChange = {onChangeHandlerId} value={id} required/>
        <button onClick={handleClick}>Delete</button>
    </div>
    );
}

export default DeleteItem;