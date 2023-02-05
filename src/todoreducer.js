/* Archivo de reducciones, con un estado inicio y las acciones esto se estará iterando con un switch  
Lista tendrá el siguiente contenidio :

todo: {
    id:545454,
    desciption: Ramiro Díaz (nombre del participante.)
    done: true or false

}
*/


export const todoReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Todo':
			return [...initialState, action.payload];

		case 'Delete Todo':
			return initialState.filter(todo => todo.id !== action.payload);

            //Se comprueba con IF , se hace negación para manipular el booleano, y retorna un nuevo objeto 

		case 'Complete Todo':
			return initialState.map(todo => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		case 'Update Todo':
			return initialState.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						description: action.payload.description,
					};
				}

				return todo;
			});

		default:
			return initialState;
            //Si no encuentra el caso return al estado inicial. 
	}
};
