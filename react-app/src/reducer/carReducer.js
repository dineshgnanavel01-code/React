function carReducer(state,action){


switch(action.type){


case "ADD":

return [
...state,
action.payload
];


case "DELETE":

return state.filter(
car=>car.id!==action.payload
);


case "UPDATE":

return state.map(car=>

car.id===action.payload.id
?
action.payload
:
car

);


default:

return state;

}


}


export default carReducer;