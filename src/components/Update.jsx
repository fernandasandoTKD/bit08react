import React from "react";
import { FaRegEdit } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export const Update =() =>{
    return(
        <form>
        <input type="text"  
        className="input-update" 
        name="sportsman" 
        value="Rodrigo Castiblanco" 
        placeholder="Deportista"/>

        <Button variant="warning" type="submit" className="btn-edit"> <FaRegEdit/> </Button>
    </form>
    );

};