const barreaux = [
    {
        "id": 1,
        "intitule": "test",
        "ville": "agadir"
    },
    {
        "id": 2,
        "intitule": "test",
        "ville": "tiznit"
    }
]


const barreauReducer =  (state = {barreaux, isLoading:true}, action)=>{
    switch(action.type){
        // case 'START_LOADING':
        //     return {...state, isLoading:true}
        // case 'END_LOADING':
        //     return {...state, isLoading:false}
        // case 'FETCH_ALL':
        //     return {...state, barreaux:[]};
        case 'FETCH_BY_SEARCH':
            return {...state, barreaux:action.payload};
        case 'CREATE':
            return {...state, barreaux:[...state.barreaux, action.payload]};
        case 'UPDATE':
            return {...state, barreaux:state.barreaux.map((barreau)=>barreau.id===action.payload.id ? action.payload : barreau)};
        case 'DELETE':
            return {...state, barreaux:state.barreaux.filter((barreau)=>barreau.id !== action.payload)}
        default:
            return state
    }
}
export default barreauReducer;