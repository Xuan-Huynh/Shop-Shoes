import styled from 'styled-components';
import {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../Components/Header/Navbar';
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartContext  } from '../../../Components/CarContext/CarContext'

function Price() {

    const [value, setValue] = useState(1);
    const {id} = useParams();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState();
    const [price, setPrice] = useState('');
    const [describe , setDescribe] = useState('');
    const { cartCount, setCartCount, cart, setCart } = useContext(CartContext);
    const [showNotification, setShowNotification] = useState(false);
    const [product, setProduct] = useState({ id: '', quantity: 1 });

    // const handleAddToCart = () => {
    //     if(product.quantity > 0){
    // setCartCount(prevValue => {
    //     if (cart.find(item => item.id === id)) {
    //         return prevValue;
    // } else {
    //     return prevValue + 1;
    // }})
    // // setShowNotification(true);
    // alert('Thêm sản phẩm vào giỏ hàng thành công!')
    // setCart((prev) => [...prev, { id: id, count: product.quantity }]);
    // // setTimeout(() => {
    // //     // setShowNotification(false);
    // // }, 800);
    // }};

    const handleAddToCart = () => {
        if (product.quantity > 0) {
          if (!cart.find(item => item.id === id)) { // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
            setCartCount(prevValue => prevValue + 1);
          }
          alert('Thêm sản phẩm vào giỏ hàng thành công!');
          setCart(prev => [...prev, { id: id, count: product.quantity }]);
        }
      };

    const handleIncrease = () => {
        setValue(prevValue => prevValue + 1);
        setProduct((prevProduct) => ({ ...prevProduct, quantity: prevProduct.quantity + 1 }));
      };
    
      const handleDecrease = () => {
        if(value > 0) {
            setValue(prevValue => prevValue - 1);
            setProduct((prevProduct) => ({ ...prevProduct, quantity: prevProduct.quantity - 1 }));
        }
      };

    useEffect(() => {
        if (id) {
        CallApi(id)
        }
    },[id])

    const CallApi = (shoeId) => {
    fetch(`https://656469fcceac41c0761e23c7.mockapi.io/hanteri/shoes/shoes/${shoeId}`)
    .then(response =>  response.json())
    .then(data => {
        setName(data.name);
        setAvatar(data.avatar);
        setPrice(data.price);
        setDescribe(data.describe);
      })
    .catch(error => console.error(error))
    }

    return (
        <PriceProduct>
            <Navbar/>
            <div className='backgroundShoes grid wide'>
                <div className='avtShoes'>
                    <img src={avatar} alt=''/>
                </div>
                <div className='inforShoes'>
                    <h3 className='nameShoes'>{name}</h3>
                    <p className='priceShoes'>₫{price}</p>
                    <div className='inforShoes'>
                            <h4>Mô tả sản phẩm</h4>
                            <div className='text-container'>
                                <p className="text-content">
                                {describe}
                                </p>
                            </div>
                        </div>
                    <div className='cartsBottom'>
                    <div className='quantityCell'>
                        <h3>Số lượng</h3>
                        <div>
                            <button className='crease' onClick={handleIncrease}><VscAdd /></button>
                            <input className='amountShoes' type='number' value={value} readOnly/>
                            <button className='crease dercrease' onClick={handleDecrease}><VscChromeMinimize /></button>
                        </div>
                    </div>
                        <div className='btnShopping'>
                            <button onClick={handleAddToCart} >
                                <MdOutlineAddShoppingCart className='iconCart'/>
                                Thêm vào giỏ hàng
                            </button>
                            <button className='shopping'>Mua ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            {showNotification && (
            <div className="notification">
                <div>
                    <p>Thêm sản phẩm vào giỏ hàng thành công!</p>
                </div>
            </div>)}
        </PriceProduct>
    )
}

export default Price;

const PriceProduct = styled.div`
        display: flex;
        justify-content: center;
        background-color: #f5f5f5;
        
    

    h3,h4{
        margin-top: 16px;
        display: flex;
    }

    .backgroundShoes{
        margin-top: 8.75rem;
        margin-bottom: 1.25rem;
        border-radius: 8px;
        background-color: #fff;
        display: flex;
    }

    .avtShoes{
        height: 380px;
        padding: 12px;

        img{
            height: 100%;
        }
    }

    .inforShoes{
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        padding: 0px 24px 0 8px;
        font-size: 1.25rem;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;

        .priceShoes{
            margin: 1rem 2rem;
            padding: 15px 20px;
            background-color: #fafafa
        }

        .text-content{
            line-height: 24px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;

        }

        p{
            margin-top: 12px;
            overflow-wrap: break-word;
            white-space: normal;
            max-width: 656px;
            font-size: 16px;
            text-align: justify;
        }


        .read-more-button{
            width: fit-content;
            overflow-wrap: break-word;
            white-space: normal;
            font-size: 16px;
            text-align: justify;
            border: none;
            background: none;
            text-decoration: underline;
            text-decoration-style: solid;
            text-decoration-color: black; 
            padding: 0;
            cursor: pointer;
        }

        .read-more-button:hover{
            text-decoration: underline;
            color: red;
            text-decoration-color: red; 
            text-decoration-style: solid;
        }

        .show-full-text .text-content {
            -webkit-line-clamp: initial;
        }

        .cartsBottom{
            margin-bottom: 16px;
        }

        .quantityCell{
            padding: 1rem;
            display: flex;
            justify-content: center;

            div{
                display: flex;
            }

            h3{
                padding-top: 4px;
                color: #757575;
                width: 110px;
                text-transform: capitalize;
                flex-shrink: 0;
                font-size: inherit;
                font-weight: 400;   
                margin: 0;
            }

            .crease{
                outline: none;
                cursor: pointer;
                border: 0;
                font-size: .875rem;
                font-weight: 300;
                line-height: 1;
                letter-spacing: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color .1s cubic-bezier(.4,0,.6,1);
                border: 1px solid rgba(0,0,0,.09);
                border-radius: 2px;
                background: transparent;
                color: rgba(0,0,0,.8);
                width: 32px;
                height: 32px;
            }

            .amountShoes{
                width: 50px;
                height: 32px;
                border-left: 0;
                border-right: 0;
                font-size: 16px;
                font-weight: 400;
                box-sizing: border-box;
                text-align: center;
                cursor: text;
                border-radius: 0;
            }
        }
    }

    .btnShopping{
        display: flex;
        justify-content: center;

        button{
            position: relative;
            overflow: visible;
            outline: 0;
            background: rgba(255,87,34,0.1);
            color: #ee4d2d;
            border: 1px solid #ee4d2d;
            box-shadow: 0 1px 1px 0 rgba(0,0,0,.03);
            max-width: 250px;
            height: 48px;
            padding: 0 20px;
            cursor: pointer;
            font-size: 16px;
            margin: 8px;
        }

        .shopping{
            color: #fff;
            position: relative;
            overflow: visible;
            outline: 0;
            background: #ee4d2d;
        }

        .iconCart{
            margin-right: 4px;
            margin-bottom: -4px;
            font-size: 20px;
        }
    }

    .notification{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);
    }
`