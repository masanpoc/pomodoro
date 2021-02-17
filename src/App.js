import './App.scss';
import { Session } from './components/Session';
import { Break } from './components/Break';
import { Display } from './components/Display';
import { TimeProvider } from './context/GlobalContext';

function App() {
  return (
    <TimeProvider>
      <div className="App">
        <h1 className='title'>My Pomodoro Timer</h1>
        <div className='stages' >
          <Session id='session' />
          <Break id='break' />
        </div>
        <Display />
      </div>
    </TimeProvider>
  );
}

export default App;
