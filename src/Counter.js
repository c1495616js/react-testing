import React from 'react';
function Counter() {
    const [count, setCount] = React.useState(0);
  
    function handleAlertClick() {
      setTimeout(() => {
        setCount(count)
      }, 3000);
    }
  
    return (
      <div>
        <p role="contentinfo">{count}</p>
        <button  onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={handleAlertClick}>
          Show alert
        </button>
      </div>
    );
  }

export default Counter;