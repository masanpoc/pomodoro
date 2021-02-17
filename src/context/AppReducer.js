const AppReducer = (state, action) => {
    switch(action.type) {
        case 'SESSION_UP':
            return {
                ...state,
                session: state.session + 1
            }
        case 'SESSION_DOWN':
            return {
                ...state,
                session: state.session - 1
            }
        case 'BREAK_UP':
            return {
                ...state,
                breaks: state.breaks + 1,
            }
        case 'BREAK_DOWN':
            // console.log(state.breaks);
            return {
                ...state,
                breaks: state.breaks - 1
            }
        default:
            return state;
    }
}

export default AppReducer;
