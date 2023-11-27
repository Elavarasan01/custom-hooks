import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case "incremented_age": {
        return {
          name: state.name,
          age: state.age + 1
        };
      }
      case "changed_name": {
        return {
          name: action.nextName,
          age: state.age
        };
      }
     default : return state
    }
  }

  const initialState = { name: "Elavarasan", age: 23 };

export const ReducerUsage=()=>{  

    const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value
    });
  }
    return(
        <div style={{textAlign:"end",marginRight:"5rem"}}>
        <h1>useReducer()</h1>
        <input value={state.name} onChange={handleInputChange} />
        <p>
          Hello, {state.name}
        </p>
        <button onClick={handleButtonClick}>Increment age</button>
       <p>Your age {state.age}</p> 
      </div>
    )
}