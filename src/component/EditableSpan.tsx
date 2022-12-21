import React from 'react';
import {type} from "os";

type PropsType = {
    title: string
}
export const EditableSpan = (props: PropsType) => {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
};

