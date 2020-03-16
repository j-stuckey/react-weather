import { CHANGE_FOO } from 'actions';

const initialState = {
    foo: 'bar'
};



const rootReducer = (state = initialState, action) => {
    console.log(state);
    
    if (action.type === CHANGE_FOO) {
        return {
            foo: action.text
        };
    }
    return initialState;
};

export default rootReducer;
