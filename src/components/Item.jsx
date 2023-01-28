import React from "react";
import Button from 'react-bootstrap/Button';
import { IoTrashSharp } from 'react-icons/io5';
import { Update } from "./Update";



export const Item = () =>{
    return (
        <li>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <Update/>
            <Button variant="danger" className="btn-delete"> <IoTrashSharp/> </Button>

        </li>
    )
}