import React from 'react';
import {Route , Routes} from "react-router-dom"
import Cartpage from './CartPage';
import CatagaryPage from './CatagaryPage';
import AddressForm from './AddressForm';
import Home from "./Home"
import Navbar from './NavBar';
import Singlepage from './SinglePage';
import Checkout from './Checkout';
import SignUp from './Signup';
import SignInSide from './Login';
import Profile from './Profile';
import Landing from './Landing';

const Allroutes = () => {
    return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signIn' element = {<SignUp/>}/>
        <Route path='/LogIn' element={<SignInSide/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/cartpage' element={<Cartpage/>} />
        <Route path='/singalInfo/:id' element={<Singlepage/>}/>
        <Route path='/cartpage/Address' element={<AddressForm/>} />
        <Route path='/category/:category' element={<CatagaryPage/>}/>
        <Route path='/cartpage/Address/chackout' element={<Checkout/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
    

    </>
    );
}

export default Allroutes;
