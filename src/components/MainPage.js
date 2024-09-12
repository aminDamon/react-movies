import React, { Component } from 'react'
import Header from './Header'
import './styles/header.css'
import './styles/poster.css'
import './styles/benefit.css'
import './styles/new_product.css'
import Poster from './Poster'
import Benefits from './Benefits'
import NewProduct from './NewProduct'

/////////react router
// import { Route as MyRoute, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
class MainPage extends Component {
    
    
  render() {
    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <MyRoute path='/' element={<Header />}>
    //             <MyRoute index element={<MainPage />}/>
    //             <MyRoute path='accessories' element={<Accessories />}/>
    //         </MyRoute>
    //     )
    // )
    return (
        <div>
            <Header />
            <Poster />
            <Benefits />
            <NewProduct />
        </div>
    )
  }
}

export default MainPage


// MainPage.js
// import React from 'react';
// import './styles/header.css'
// import Header from './Header';
// import { Route, Routes, Outlet } from 'react-router-dom';
// import Accessories from './Accessories';

// const MainPage = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="accessories" element={<Accessories />} />
//       </Routes>
//       <Outlet />
//     </>
//   );
// };

// const Home = () => {
//   return <div>Home Page</div>;
// };

// export default MainPage;

