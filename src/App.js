// import logo from './logo.svg';
 //import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

//State and Life cycle
// import React from 'react';
// class App extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       data:"Daxesh"
//     }
//   }

//   render()
//   {
//     return(
//       <h1>Hello {this.state.data}</h1>
//     )
//   }
// }
//export default App;

import React from 'react';
import Profile from './Profile'
function App()
{
  return(
    <div className='App'>
      <Profile/>
    </div>
  )
}
export default App;