import React, {useState} from "react";
import "./SearchProducts.css"
import SearchBarProducts from "../../components/screens/categories(kids, man, girls)/multiComponents/SearchBarProducts.jsx";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setSearchDropdownQuery} from "../../components/redux/products/reducer.js";
import {setSearchDropdownBlogQuery} from "../../components/redux/blog/reducer.js";

const SearchProducts = ({onChange}) => {
    const dispatch = useDispatch();
    const {searchProductResult,searchBar} = useSelector((state) => state.products);
    const {searchProductResultBlog} = useSelector((state) => state.blog)

    const [searchValue, setSearchValue] = useState('');

    const searchBarWatch = (query) => {
        dispatch(setSearchDropdownQuery(query))
        dispatch(setSearchDropdownBlogQuery(query))
    }


    return (
        <div className='search_container'>
            <div className='search_products'>
                <input type="text" className='input_products' placeholder='Name your products...'
                       onChange={e => {
                           setSearchValue(e.target.value)
                           onChange(e.target.value)
                           searchBarWatch(e.target.value)
                       }} value={searchValue}/>
            </div>
            {searchBar && <SearchBarProducts searchArr={searchProductResult} blogSearchArr={searchProductResultBlog}/>}
        </div>
    )
}

export default SearchProducts


