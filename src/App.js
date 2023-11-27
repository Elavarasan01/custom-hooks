import './App.css';
import { ContextDemo } from './components/contextusage';
import { createContext } from 'react';
import { RefUsage } from './components/refusage';
import { ReducerUsage } from './components/reducerusage';
import { MemoUsage } from './components/memousage';
import { CallbackUsage } from './components/callbackusage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CustomHooks } from './components/customhooks';

const data=createContext();

function App() {
  const userDetails={
    userName:"Elavarasan",
    userNumber:"82220102003"
  }
  return (
    <>  
    {/* <data.Provider value={userDetails}>
     
      <ContextDemo/>
     <hr/>
     <RefUsage/>
     <hr/>
     <ReducerUsage/>
     <hr/>
     <MemoUsage/>
     <hr/>
     <CallbackUsage/>
    
    </data.Provider> */}
    <CustomHooks/>
    </>
  );
}

export default App;

export {data};
