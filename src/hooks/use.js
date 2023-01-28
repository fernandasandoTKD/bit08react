import { useReducer } from "react"
import { reducer } from "../reducer"

export const use= () =>{

    const inicialState =[]

    const [todos, dispatch] = useReducer(reducer, inicialState, init)

    //Creación de handle o funciones

    const handleNewTodo= todo => {

        const action ={
            type: "Add Todo",
            payload: todo,
        }
        dispatch (action);
    }
    const handleDeleteTodo = id =>{
        const action ={
            type: "Delete Todo",
            payload: id,
        };
   
    }

    const  handleCompleteTodo = id =>{
        const action ={
            type: "Complete Todo"
        }
    }
}