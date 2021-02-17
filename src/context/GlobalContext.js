import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    session: 25,
    breaks: 5
}

export const TimeProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // Actions
    function incrementSession() {
        dispatch({
            type: 'SESSION_UP'
        });
    }

    function decrementSession() {
        dispatch({
            type: 'SESSION_DOWN'
        });
    }

    function incrementBreak() {
        dispatch({
            type: 'BREAK_UP'
        });
    }

    function decrementBreak() {
        dispatch({
            type: 'BREAK_DOWN'
        });
    }

    
    
    return (
        <TimeContext.Provider value={{
            session: state.session,
            breaks: state.breaks, 
            incrementSession,
            decrementSession,
            incrementBreak,
            decrementBreak
        }}>
            {children}
        </TimeContext.Provider>
    )
}

export const TimeContext = createContext(initialState);