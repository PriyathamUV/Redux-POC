
const initial={
    values:{}
};
const reducer=(state=initial,action)=>{
    switch (action.type) {
        case "SUBMIT-SIGN-UP":
            return {...state,values:action.payload}
            break;
    
        default:
            return state;
            break;
    }

};

export default reducer;


export const getDetails=state=>{
    return state;
}
