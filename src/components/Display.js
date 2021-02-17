import React, { useContext, useState, useEffect } from 'react';
import { TimeContext } from '../context/GlobalContext';
import useSound from 'use-sound';
import dong from '../sounds/dong.mp3';
import ding from '../sounds/ding.mp3';


export const Display = () => {
    
    // break and session lengths
    const { breaks, session } = useContext(TimeContext);

    // break and session lengths in seconds
    const lasting = session*60;
    const breaking = breaks*60;

    // testing length values
    // const lasting = 70;
    // const breaking = 10;

    // title in display
    const [title, setTitle] = useState('Press play to start');

    // playing variable --> know if the countdown is counting or not
    const [playing, setPlaying] = useState(false);

    // initialCount to display
    const initialCount = session.toString() + ":00";
    // count variable to display
    const [count, setCount] = useState(initialCount);

    // study variable --> true if we are studying/in a session
    const [study, setStudy] = useState(true);

    // orange variable to set className 'orange' when count<1min
    const [orange, setOrange] = useState(false);

    // clear variable to clear the interval and store it??
    const [clear, setClear] = useState();

    // sound functions to play when session/break ends
    const [play1] = useSound(dong);
    const [play2] = useSound(ding);

    // timer, minutes and seconds variables
    const [timer, setTimer] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState(); 


    // useEffects: 

    // whenever count changes:
    useEffect( () => {
        // console.log(count);
    }, [count]);

    // whenever timer changes:
    useEffect( () => {
        // console.log(timer, parseInt(timer % 60, 10), seconds);
        if(playing && timer>0) {
            // we calculate the minutes and seconds remaining respecting the digital time rendering condition
            setMinutes(prevMinutes => (parseInt(timer / 60, 10) < 10) ? "0" + parseInt(timer / 60, 10) :  parseInt(timer / 60, 10));
            setSeconds (prevSeconds => (parseInt(timer % 60, 10) < 10) ? "0" + parseInt(timer % 60, 10) : parseInt(timer % 60, 10));
        }
        // when count<1min --> set orange to true (only once)
        if (timer < 60 && !orange) {
            setTimeout(setOrange(true), 2000);
        }
        // when count is finished
        if(timer===0) {
            // set orange to false
            setOrange(false);

            // if we were studying
            if(study) {
                console.log('finished studying')
            
                // play the second song
                play2();

                // set title to break
                setTitle('Time for a break')
                
                // set timer to break length
                setTimer(breaking);

                // set study to false
                setStudy(false);
            }
            
            if(!study) {
                console.log('finished break')
                
                // play the first song
                play1();

                // set title to study
                setTitle('Time to focus');

                // set timer to session length
                setTimer(lasting);           
                
                // set study to true
                setStudy(true);
            }
        }
        // console.log(timer, minutes, seconds);
    }, [timer]);

    // whenever minutes changes
    useEffect( () => {
        // console.log(minutes);
    }, [minutes]);

    // whenever minutes changes
    useEffect( () => {
        if(playing) {
            // we set the count to display current timer
            setCount(minutes + ":" + seconds);
        }
        
        // console.log(seconds);
    }, [seconds]);
    

        // si clico en reiniciar y quitando el timeout pasaría lo siguiente:
        // setTimeout(function() {
        //     if(true) {
        //         clearInterval(interval);
        //         console.log(lasting);
        //         timer=lasting;
        //         setPlaying(false);
        //         setTitle('Press play to start')
        //     }
        // } ,4000) 
   

    // 1st countdown 2nd restart 3rd pause/play


    const countDown = () => {
        // we substract one second to timer
        setTimer(prevTimer => prevTimer - 1);
    }

    const startPlaying = (duration) => {
        
        console.log('playing', duration)

        // we initialize the timer (if we have paused (playing== still true) --> we don't initialize)
        if(!playing) {
            setTimer(duration);
        }

        // conditional render of the count --> if play=true then show the count variable (this is because initialCount updates when length changes but not count variable (useState only runs one time initially))
        setTimeout( function() { setPlaying(true);}, 1000);

        // we change the title based on study state
        if(study) {
            setTitle('Time to focus');
        }
        if(!study) {
            setTitle('Time for a break');
        }

        // first substraction before setInterval (initial condition --> not to be undefined)


         // we define a setInterval to run a function every second
        setClear(setInterval(countDown, 1000));
    }

    const pausePlaying = () => {
        // we stop counting down
        clearInterval(clear);
        // we change the title to show that the timer is paused
        setTitle('Paused');

        console.log('paused')
    }

    const restartPlaying = () => {
        // we stop counting down
        clearInterval(clear);
        // we change the title to start again
        setTitle('Press play to restart');
        // we are going to start studying again
        setStudy(true);
        // we set the timer to the session length
        setTimer(lasting);
        // we are not playing --> we display the initial count
        setPlaying(false);
        console.log('restarting')
    }

    const handleTime = (study_length, break_length, control) => {
        if(control==='play') {
            // i want to start the counter
            startPlaying(study_length);
        }
        else if(control === 'pause') {
            // i want to pause the counter
            pausePlaying()
        }
        else {
            // i want to restart the counter
            restartPlaying()
        }
    }

    return (
        <div className='display'>
            <h1> {title}
            {/* {console.log(count, initialCount)} */}
            </h1>
            <h1 className={orange ? 'time-left' : 'standard'}> {playing ? count : initialCount} </h1>
            <div className='controls'>
                <button onClick={() => handleTime(lasting, breaking, 'play')}>
                    <svg className='control' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                </button>
                <button 
                onClick={() => handleTime(lasting, breaking, 'pause')}
                >
                    <svg className='control' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                </button>
                <button 
                onClick={() => handleTime(lasting, breaking, 'restart')}
                >
                    <svg className='control' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
