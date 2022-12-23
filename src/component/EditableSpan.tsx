import React, {ChangeEvent, useState} from 'react';


type PropsType = {
    title: string
    callback: (newTitle: string) => void
}


export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const editFooHandler = () => {
        setEdit(!edit)
        props.callback(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    return (
        edit ?
            <input value={newTitle} onBlur={editFooHandler} autoFocus onChange={onChangeHandler}/>
            :
            <span onDoubleClick={editFooHandler}>{props.title}</span>
    );
};

