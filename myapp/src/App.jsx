import React from 'react';
import { routerLinks } from './router/router';
import { UserRegistration } from './pages/registration';
import { UserLogin } from './pages/login';
import { UserDetails } from './pages/details';
import {Route, Routes} from "react-router-dom";

function App() {
  return <div>
        <Routes>
            <Route path={routerLinks.REGISTRATION} element={<UserRegistration/>}></Route>
            <Route path={routerLinks.LOGIN} element={<UserLogin/>}></Route>
            <Route path={routerLinks.DETAILS} element={<UserDetails/>}></Route>
        </Routes>
    </div>
}

export default App;
