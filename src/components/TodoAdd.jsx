import React from "react";
import Button from 'react-bootstrap/Button';
import { AiOutlineAppstoreAdd} from 'react-icons/ai';
export const TodoAdd =() =>{
    return (
    <form>
        <input type="text"  
        className="input-add" 
        name="sportsman" 
        value="Rodrigo Castiblanco" 
        placeholder="Deportista"/>

        <Button variant="success" type="submit" className="btn-add"> <AiOutlineAppstoreAdd/> </Button>
    </form>
    );
};