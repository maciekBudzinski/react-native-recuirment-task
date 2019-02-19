import * as listActions from './actionTypes';

const initialState = {
  lists: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case listActions.ADD: {
            return {
                ...state,
                lists: action.payload
            }
        }
        default: {
            return state;
        }
    }

}