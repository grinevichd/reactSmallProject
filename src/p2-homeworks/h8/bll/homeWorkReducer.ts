import {UserType} from "../HW8";

type SortUpAT = {
    type: "sort"
    payload: "up"
}
type SortDownAT = {
    type: "sort"
    payload: "down"
}
type Check18AT = {
    type: "check"
    payload: "18"
}
type ActionType = SortDownAT | SortUpAT | Check18AT

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    debugger
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                return [
                    ...state.sort((a, b) => a.name.localeCompare(b.name))
                ]
            } else if (action.payload === "down") {
                return [
                    ...state.sort((a, b) => b.name.localeCompare(a.name))
                ]
            }
            return state

        }
        case 'check': {
            if (action.payload === "18") {
                return state.filter(el => el.age >= +action.payload)
            }
            return state
        }
        default:
            return state
    }
}