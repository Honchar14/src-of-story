import '../../assets/styles/global.css'
import {Route, Routes} from 'react-router-dom';
import Layout from "./Layout/Layout.jsx"
import HomePage from "./HomePage.jsx";
import Blog from "./blog/Blog.jsx";
import Mans from "./categories(kids, man, girls)/Mans.jsx";
import Girls from "./categories(kids, man, girls)/Girls.jsx";
import Kids from "./categories(kids, man, girls)/Kids.jsx";
import AboutProduct from "./aboutProduct/AboutProduct.jsx";
import {ReferenceProductsContext} from "../../assets/methods/Context.jsx";
import {useEffect, useState} from "react";
import {blogData, componentsData} from "./componentsData.js";
import AdminPanel from "./adminPanel/AdminPanel.jsx";
import Basket from "./basket/Basket.jsx";
import AboutUs from "./aboutUs/AboutUs.jsx";
import Checkout from "./checkout/Checkout.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../redux/products/reducer.js"
import {setBlogData} from "../redux/blog/reducer.js";


function App() {
    const products = useSelector((state) => state.products.productsData);
    const dispatch = useDispatch();
    const setProductsFromArray = (products) => {
        dispatch(setProducts(products));
    };

    const setBlogProductFromArray = (products) => {
        dispatch(setBlogData(products));
    };

    useEffect(() => {
        setProductsFromArray(componentsData)
        setBlogProductFromArray(blogData)
    },[])


    return (
        <ReferenceProductsContext.Provider value={{'products': products, 'otherProduct': ''}}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/mans" element={<Mans/>}/>
                        <Route path="/girls" element={<Girls/>}/>
                        <Route path="/kids" element={<Kids/>}/>
                        <Route path="/aboutProduct/:productId" element={<AboutProduct />} />
                        <Route path="/adminPanel" element={<AdminPanel />} />
                        <Route path="/Basket" element={<Basket />} />
                        <Route path="/aboutUS" element={<AboutUs />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Route>
                </Routes>
            </div>
        </ReferenceProductsContext.Provider>
    )
}

export default App
