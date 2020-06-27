export interface IAppState {
    notevalue: '';
    datenew: Date;
}

export const INTITIAL_STATE: IAppState = {
    notevalue: '',
    datenew: null
};
export function rootReducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return Object.assign({}, state, {
                notevalue: action.subject.notee,
                datenew: action.subject.someData

            }, {});
        case 'REMOVE_NOTE':
            return action.totalArray.filter((current) => {
                return current.notevalue !== action.subject.notee;
            });
        default:
            return state;
    }

}
