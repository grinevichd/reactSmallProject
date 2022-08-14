
export type initStateType = {
    color : string
}

const initState:initStateType = {
    color : 'some'
};

const CHANGE_COLOR = "CHANGE_COLOR"
type changeThemeCAC = {
    type : "CHANGE_COLOR",
    color : string
}

export const themeReducer = (state = initState, action: changeThemeCAC): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_COLOR: {
            return {
                ...state,
                color : action.color
            };
        }
        default: return state;
    }
};

export const changeThemeC = (color : string): changeThemeCAC => ({type : CHANGE_COLOR,color}); // fix any