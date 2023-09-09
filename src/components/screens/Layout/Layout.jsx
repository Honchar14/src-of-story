import {Link, Outlet} from "react-router-dom";
import React, {useState, useEffect} from "react";
import "./Header.css"
import "./Footer.css"
import ButtonMain from "../../../assets/ui/ButtonMain.jsx";
import PopUp from "../../../assets/ui/pop-up/Pop-up.jsx";
import Search from "../../../assets/ui/Search.jsx";
import {globalBasket} from "../basket/classes/ClassBasket.js";
import LayoutData from "./LayoutData.js";


const Layout  = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [inputQuery, setInputQuery] = useState('');

    const [currentJordan, setCurrentJordan] = useState('/img/jordan-footer.png')


    const [modalActive, setModalActive] = useState(false)
    const [productMenuVisible, setProductMenuVisible] = useState(false);

    const [searchMenuVisible, setSearchMenuVisible] = useState(false);

    const [quantitiesProductVisible, setQuantitiesProductVisible] = useState(false)


    const setRandomJordan = () => {
        const randomId = Math.floor(Math.random() * LayoutData.length);
        const selectedRandomImg = LayoutData[randomId]
        setCurrentJordan(selectedRandomImg.img)
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setRandomJordan();
        },1000)
        return () => clearInterval(timer)
    },[]);


    const searchToggle = () => {
        setSearchMenuVisible(!searchMenuVisible)
    }

    const toggleModal = () => {
        setModalActive(!modalActive);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query)
    };

    const handleQuery = (e) => {
        e.preventDefault()

        alert('Your data has been sent, thanks!')

        setModalActive(false)
    }

    const useDebounce = (fn, ms) => {
        let timeOut;
        return function () {
            const fnCall = () => {
                fn.apply(this, arguments)
            }

            clearTimeout(timeOut)

            timeOut = setTimeout(fnCall, ms)
        }
    }

    const getTotalQuantity = () => {
        return globalBasket.getTotalQuantity();
    };

    useEffect(() => {
        const totalProductQuantity = getTotalQuantity();
        setQuantitiesProductVisible(totalProductQuantity > 0);
    }, []);

    return (
        <>
            <section className='header'>
                <div className='container header_container'>
                    <div className='header_logo'>
                        <Link to="/"><img src="../../../../public/img/logo.png" alt="logo"/></Link>
                    </div>
                    <nav className='header_nav'>
                        <ul className='header_nav__items'>
                            <li className='nav_item'><Link className='nav_link' to="/">Home</Link></li>
                            <li className='nav_item'><Link className='nav_link' to="/aboutUs">About</Link></li>
                            <li className='nav_item'
                                onMouseEnter={() => setProductMenuVisible(true)}
                                onMouseLeave={() => setProductMenuVisible(false)}>
                                <Link className='nav_link' to="/">Product{productMenuVisible && (
                                    <ul className='sub_menu'>
                                        <li><Link to="/mans" className='nav_link'>Mans</Link></li>
                                        <li><Link to="/girls" className='nav_link'>Girls</Link></li>
                                        <li><Link to="/kids" className='nav_link'>Kids</Link></li>
                                    </ul>)}</Link></li>
                            <li className='nav_item'><Link className='nav_link' to="/blog">Blog</Link></li>
                            <li className='nav_item'><Link className='nav_link' to="/">Page</Link></li>
                        </ul>
                    </nav>
                    <div className='header_media'>
                        <a href="#" className="header_media__icon" onClick={searchToggle}>
                            <img src="../../../../public/img/search.svg" alt="search" className='icon'/>
                        </a>
                        {searchMenuVisible && (
                            <div className="search_menu">
                                <Search classname={'search_header'} onChange={useDebounce(handleSearchChange, 700)}></Search>
                            </div>
                        )}

                        <a href="#" className="header_media__icon">
                            <Link to='/Basket'>
                                <img src="../../../../public/img/basket.svg" alt="search" className='icon'/>
                            </Link>
                        </a>
                        {quantitiesProductVisible && (
                            <div className='quantities_product'>{getTotalQuantity()}</div>
                        )}

                        <a href="#" className='header_media__icon'>
                            <Link to='/adminPanel'>
                                <img src="../../../../public/img/user.svg" alt="search" className='icon'/>
                            </Link>
                        </a>
                    </div>
                </div>
            </section>
            <Outlet/>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer_section'>
                        <div className='left_side'>
                            <h2 className='left_side_title'>Join us</h2>
                            <p className='left_side_subtitle'>We will find the ideal sneakers just for you !</p>
                            <ButtonMain className='button_footer' onClick={toggleModal}>Submit</ButtonMain>
                        </div>
                        <div className='right_side'>
                            <img src="../../../../public/img/logo-footer.png" alt="logo-footer"
                                 className='logo-footer'/>
                            <img src={currentJordan} alt="jordan-footer"
                                 className='jordan-footer'/>
                        </div>
                        <PopUp active={modalActive} setActive={setModalActive}>
                            <div className='modal_input_menu'>
                                <input type="text" placeholder='Name' className='input_modal' onChange={e => setInputQuery(e.target.value)}/>
                                <input type="text" placeholder='Last name' className='input_modal' onChange={e => setInputQuery(e.target.value)}/>
                                <input type="text" placeholder='Mail' className='input_modal' onChange={e => setInputQuery(e.target.value)}/>
                                <input type="text" placeholder='Phone' className='input_modal' onChange={e => setInputQuery(e.target.value)}/>
                                <ButtonMain className={'button_modal'} onClick={e => handleQuery(e)}>Submit</ButtonMain>
                            </div>
                            <img src="../../../../public/img/logo-modal.png" alt="logo-modal" className='modal_logo'/>
                        </PopUp>
                    </div>
                    <p className='footer_text'>© 2023 Carson store. All rights reserved | Carson Sneakers Store.</p>
                </div>
            </footer>

        </>
    )
}

export default Layout