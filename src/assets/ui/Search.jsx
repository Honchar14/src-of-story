import React, {useState} from "react";
import "./Search.css"
import SearchBar from "./pop-up/searchBar.jsx";
import {componentsData} from "../../components/screens/componentsData.js";


const Search = ({onChange, classname}) => {
    const [searchProducts, setSearchProducts] = useState(componentsData)
    const [copyProducts, setCopyProducts] = useState(componentsData)


    const [search, setSearch] = useState('');
    const [searchBar, setSearchBar] = useState(false)


    const searchBarView = (query) => {
        if (query === "") {
            setSearchBar(false)
        } else {
            setSearchBar(true)

            const filterProducts = copyProducts.filter((product) =>
                product.title.startsWith(query)
            );
            setSearchProducts(filterProducts.map((item) => {
                return {
                    'title': item.title,
                    'link': `/aboutProduct/${item.id}`
                }
            }));
        }
    }


    return (
        <>
            <div className={`product_search ${classname}`}>
                <input type="text" placeholder='Name your product...'
                       onChange={e => {
                           setSearch(e.target.value)
                           onChange(e.target.value)
                           searchBarView(e.target.value)
                       }}
                       value={search}/>
                <svg className='search_icon' fill="#000000" height="200px" width="200px" version="1.1"
                     id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier"> <path
                        d="M325.606,304.394L223.328,202.117c16.707-21.256,26.683-48.041,26.683-77.111C250.011,56.077,193.934,0,125.005,0 C56.077,0,0,56.077,0,125.006C0,193.933,56.077,250.01,125.005,250.01c29.07,0,55.855-9.975,77.11-26.681l102.278,102.277 C307.322,328.536,311.161,330,315,330s7.678-1.464,10.606-4.394C331.465,319.749,331.465,310.251,325.606,304.394z M30,125.006 C30,72.619,72.619,30,125.005,30c52.387,0,95.006,42.619,95.006,95.005c0,52.386-42.619,95.004-95.006,95.004 C72.619,220.01,30,177.391,30,125.006z"></path> </g>
                </svg>
            </div>
            {searchBar && <SearchBar searchArray={searchProducts}></SearchBar>}

        </>
    )
}


export default Search