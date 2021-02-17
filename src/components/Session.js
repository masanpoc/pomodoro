import { useContext } from 'react';
import { TimeContext } from '../context/GlobalContext';


export const Session = () => {
    const { session, incrementSession, decrementSession } = useContext(TimeContext);
    return (
        <div className='stage' >
            <h3>Session Length</h3>
            <h4>{session} min</h4>
            <div className='arrows'>
                <button onClick={session>1 && (() => decrementSession())}>
                    <svg className='arrow' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
                    </svg>
                </button>
                <button onClick={session<60 && (() => incrementSession())}>
                    <svg className='arrow' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
