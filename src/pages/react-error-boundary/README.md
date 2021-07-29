## React-Error-Boundary

```
npm install --save react-error-boundary
```

## Learning

- `static getDerivedStateFromError`
  `getDerivedStateFromError` is invoked if some error occurs during the rendering phase of any lifecycle methods or any children components.

[Example](https://www.geeksforgeeks.org/reactjs-getderivedstatefromerror-method/):

```
import React, { Component } from 'react';

export default class App extends Component {

  // Intializing the state
  state = {
    error: false
  };

  static getDerivedStateFromError(error) {
    // Changing the state to true if some error occurs
    return {
      error: true,
    };
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          {this.state.error ? <div>Some error</div> : <GFGComponent />}
        </div>
      </React.StrictMode>
    );
  }
}

class GFGComponent extends Component {

  // GFGComponent throws error as state of GFGCompnonent is not defined
  render() {
    return <h1>{this.state.heading}</h1>;
  }
}
```

## Refs

- https://github.com/bvaughn/react-error-boundary
