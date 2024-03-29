import {Routes, Route} from "react-router-dom";
import {useContext} from "react";

import {appContext} from "@services";
import {
    About, 
    Account, 
    AdminSneakers, 
    AuthVerify, 
    AuthPasswordReset, 
    Catalog, 
    Cart, 
    Contacts, 
    Favourite, 
    NotFound, 
    Home, 
    Product, 
    Shops
} from "@pages";


export default function Routers() {
    const {isRegisteredUser} = useContext(appContext);

    const routers = [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/catalog/:filters?',
            element: <Catalog/>
        },
        {
            path: '/catalog/product/:id',
            element: <Product/>
        },
        {
            path: '/auth/verify/:uuid',
            element: <AuthVerify/>
        },
        {
            path: '/auth/password/reset/:uuid',
            element: <AuthPasswordReset/>
        },
        {
            path: '/customer/account',
            element: <Account/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/customer/favourite',
            element: <Favourite/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contacts',
            element: <Contacts/>
        },
        {
            path: '/shops',
            element: <Shops/>
        },
        {
            path: '/admin/sneakers',
            element: isRegisteredUser ? <AdminSneakers/> : <NotFound/>
        },
        {
            path: '*',
            element: <NotFound/>
        },
    ]
    

    return (
        <Routes>
            {routers.map(({path, element}, index) => (
                <Route path={path} element={element} key={index}></Route>
            ))}
        </Routes>
    );
}