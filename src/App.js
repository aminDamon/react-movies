import './App.css';
import Accessories from './components/Accessories';
import MainPage from './components/MainPage'


////////react router
import { Route as MyRoute, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <MyRoute path='/'>
        <MyRoute index element={<MainPage />}/>
        <MyRoute path='accessories' element={<Accessories />}/>
      </MyRoute>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


// App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import MainPage from './components/MainPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <MainPage />
//       </div>
//     </Router>
//   );
// };

// export default App;

