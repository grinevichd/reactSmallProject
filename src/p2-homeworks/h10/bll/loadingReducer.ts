
const SET_LOADER = "SET_LOADER"

type LoadingAT = {
    type : "SET_LOADER"
    loader : boolean
}
export type initStateType = {
    loader : boolean
}

 const initState : initStateType = {
  loader : false
}

export const loadingReducer = (state = initState, action: LoadingAT): initStateType => { // fix any

    switch (action.type) {
        case 'SET_LOADER': {
            return {...state, loader : action.loader}
        }
        default: return state
    }
}

export const loadingAC = (loader : boolean): LoadingAT => ({type : SET_LOADER, loader}) // fix any