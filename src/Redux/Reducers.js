const InitialState = {
    data : [],
    shows : [],
    fetchData: [],
}

export const ReducersData = (state = InitialState, {type, payload}) => {
     switch(type) {
        case "SETDATA" : 
        // state = [...state, action.payload];
        return {...state, data : payload}
        // default : return state;
        case "SETDATATWO" : 
        // state = [...state, action.payload];
        return {...state, shows : payload}
        case "FETCHQUERY" : 
        // state = [...state, action.payload];
        return {...state, fetchData : payload}
        default : return state;
     }
}