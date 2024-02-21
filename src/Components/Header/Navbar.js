import styled from 'styled-components';
import HanteLogo from '../../assets/image/57f3ba159e10468bb02d8392e0e57097-removebg-preview.png';
import { HiSearch, HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import React, { useState, useContext, useEffect } from 'react';
import {CartContext} from '../CarContext/CarContext'
import {useNavigate} from 'react-router-dom';

function Navbar(props) {

    const [data, setData] = useState([])
    const { cartCount } = useContext(CartContext);
    const [isHovered, setIsHovered] = useState(false);
    const navigate  = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isUserHovered, setIsUserHovered] = useState(false);
        
    useEffect(() => {
        CallApi()
    },[])
    
    const CallApi = () => {
        fetch('https://656469fcceac41c0761e23c7.mockapi.io/hanteri/shoes/shoes')
        .then(response =>  response.json())
        .then(callback => setData(callback))
        .catch(error => console.error(error))
    }

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchText(value);
        
        const filteredResults = data.filter(
      (item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
      );
      
      setSearchResults(filteredResults);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleUserMouseEnter = () => {
    setIsUserHovered(true);
    };

    const handleUserMouseLeave = () => {
    setIsUserHovered(false);
    };

    const handleLogicHome = () => {
        navigate(`/`);
    }

    const setLogin = () => {
        navigate(`/login`)
    }

    const navigateProduct = (id) => {
        navigate(`/inforproduct/${id}`)
        setSearchText('');
    }

    const navigateCart = () => {
        navigate(`/cart`)
    }

    return (
        <NavHeader>
            <div className='navHeader shadow-md'>
                <div className='logo'>
                    <img src={HanteLogo} alt='' />
                </div>
                <div className='subNavHeader'>
                    <div onClick={handleLogicHome}>Trang chủ</div> 
                    <div  
                    className={isHovered ? 'hovered' : ''}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        Sản phẩm
                        {isHovered && <ul className='subNavProduct'>
                        <li>Thương hiệu</li>
                        <li>Giảm giá</li>
                        <li>Bán chạy</li>
                    </ul>}
                    </div> 
                    <div>Blog</div> 
                    <div>Liên hệ</div>  
                </div>
                    <div class="navSearch">
                        <div>
                            <div className='flex'>
                                <input type='text' placeholder='Tìm kiếm...' className='search'
                                value={searchText} onChange={handleSearch}/>
                                <HiSearch className='hiSearch navIcon'/>
                            </div>
                            <div>
                            {searchText && (
                            <div>
                            <ul className='subNavSearch'>
                                {searchResults.map((result) => (
                                <li key={result.id} onClick={() => navigateProduct(result.id)}>{result.name}</li>
                                ))}
                            </ul>
                            </div>
                            )}  
                            </div>
                        </div>
                        <div
                            className={`userIconContainer ${isUserHovered ? "hovered" : ""}`}
                            onMouseEnter={handleUserMouseEnter}
                            onMouseLeave={handleUserMouseLeave}
                        >
                            <BiUser className="userIcon navIcon" onClick={setLogin} />
                            {isUserHovered && (
                            <div className="userTooltip">
                                <div className="arrow"></div>
                                <ul className="tooltipContent">
                                    <li>Tài khoản của tôi</li>
                                    <li>Đơn mua</li>
                                    <li>Đăng xuất</li>
                                </ul>
                            </div>
                            )}
                        </div>
                        <HiOutlineHeart className='favouriteIcon navIcon'/>
                        <div className='shoppingMessage' data-count={cartCount}>
                        <HiOutlineShoppingCart className='shoppingCart navIcon' onClick={navigateCart}/>
                        </div>
                        
                    </div>
            </div>
        </NavHeader>
    )
}

export default Navbar;

const NavHeader = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 99;

    :root{
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;

    }
    .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
    }

    .navHeader{
        background-color: #c4f3b5;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        height: 100%;
    }

    .logo{
        margin-left: 20px;
        width: 100px;
        cursor: pointer;   
        
        img {
            width: 100px;
            zoom: 1.2;
            margin-top: -15px 
    }
    }

    .navSearch{
        color: #fff;
        display:flex;
        justify-content: flex-end;
        padding:20px;
        position: relative;

        li{
            cursor: pointer;
            padding: 8px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;

            &:hover{
                background-color: #bbb;
            }
        }
    }

    .navSearch .navIcon:hover{
        opacity: 0.5;
    }

    .favouriteIcon,
    .userIcon,
    .shoppingCart{  
        margin: 0 4px;
        width: 20px;
        cursor: pointer;
        color: #bbb;
        display: flex;
        align-items: center;
        transform: translateY(11px);
    }

    .shoppingMessage {
        position: relative; 
    }
    
    .shoppingMessage:after {
    content: attr(data-count); 
    position: absolute;
    top: 3px; 
    left: 16px;
    width: 14px; 
    height: 14px;
    background-color: red; 
    border-radius: 50%; 
    color: white; 
    font-size: 12px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    }

    .shoppingMessage[data-count = "0"]:after {
        display: none;
    }

    .hiSearch {  
        margin: 0 4px;
        margin-right: 12px;
        width: 20px;
        cursor: pointer;
        color: #bbb;
        display: flex;
        align-items: center;
        transform: translateX(-22px) translateY(11px);
    }

    .search {
        margin-right: -12px;
        font-size: 16px;
        border: 1px solid #fff;
        color: #333;
        outline: none;
        width: 0;
        padding: 10px;
        padding-left: 24px;
        width: 180px;
        border-radius: 24px;
        cursor: text;
        position: relative;
    }

    .subNavHeader {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;

        div{
            margin: 2px 12px ;
            font-size: 18px;
            height: 100%;
            position: relative;
            cursor: pointer;
            padding: 38px 0px;
        }
    }
        
    .subNavHeader div::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 36px;
        width: 100%;
        height: 2px;
        background-color: black;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .subNavHeader div:hover::after {
      transform: scaleX(1);
    }

    .subNavSearch,
    .subNavProduct{
        display: block;
        width: 180px;
        position: absolute;
        margin-top: 39px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        background: #fff;
        border-radius: 0 0 8px 8px;
        color: #000;
    }

    .subNavSearch{
        overflow-x: auto;
        margin-left: -5rem;
        width: 360px;
        margin-top: 30px;
    }

    .flex{
        display: flex;
    }

    .subNavProduct{
        left: 50%;
        transform: translateX(-50%);
    }

    .subNavSearch li,
    .subNavProduct li{
        display: flex;
        justify-content: center;
        padding: 0 18px;
        line-height: 38px;
    }

    .subNavSearch li:hover,
    .subNavProduct li:hover{
        background-color: #bbb;
    }

    .userIconContainer {
  position: relative;
}

    .userTooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 555%;    
    margin-top: 4px;
    transform: translateX(-50%);
    background-color: white;
    color: black;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 99;
    }

    .arrow {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    }

    .tooltipContent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


