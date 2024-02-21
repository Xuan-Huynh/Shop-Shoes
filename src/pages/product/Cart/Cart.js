import { useState, useEffect, useContext} from "react"
import React from 'react';
import styled from 'styled-components'
import Navbar from '../../../Components/Header/Navbar';
import {CartContext} from '../../../Components/CarContext/CarContext'
import {setCartCount } from '../../../Components/CarContext/CarContext'
import { useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";

function Cart(props) {


    const { cart, setCart, setCartCount, cartCount  } = useContext(CartContext);
    const [data, setData] = useState([])
    const matchedItems = data.filter(item => cart.some(cartItem => cartItem.id === item.id));
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();    
    useEffect(() => {
        CallApi()
    },[])

    const CallApi = () => {
    fetch('https://656469fcceac41c0761e23c7.mockapi.io/hanteri/shoes/shoes')
    .then(response =>  response.json())
   
    .then(callback => setData(callback))
    .catch(error => console.error(error))
    }
    
    const handleShopping = () => {
        navigate(`/`)
    }

    const handleIncrease = (itemId, itemAount) => {
    
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((item) => {
            // nếu đúng id và số đếm nhỏ hơn hàng tồn thì cho tăng tiếp
            if(item.id === itemId && item.count < itemAount) {
              console.log(itemAount);
              return {
                ...item,
                count: item.count + 1 
              };
            }
            return item;
          });
          return updatedCartItems;
        });
      };
      
      const handleDecrease = (itemId) => {
        
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((item) => {
            if (item.id === itemId) {
              if (item.count > 1 ) {
                
                return {
                  ...item,
                  count: item.count - 1,
                };
              } else  {
                setCartCount( cartCount - 1)
                const removeItemFromCart = (itemId) => {
                  const updatedCart = cart.filter((item) => item.id !== itemId);
                  setCart(updatedCart);
                };
                
                // Sử dụng hàm removeItemFromCart để xóa phần tử dựa trên item.id
                removeItemFromCart(item.id);

                return null;
                
              }
            }
            return item;
          });
          const filteredData = data.filter((item) =>
            updatedCartItems.some((cartItem) => cartItem && cartItem.id === item.id)
          );
          setData(filteredData);
          
          return updatedCartItems.filter((item) => item !== null);
        });
      };
      // tự động hiển thị mua ngay khi ko còn sản phẩm
const [isEmpty, setIsEmpty] = useState(false);

useEffect(() => {
  setIsEmpty(matchedItems.length === 0);
}, [matchedItems]);


    useEffect(() => {
    const cartItemsMap = cart.reduce((acc, item) => {
        if (acc[item.id]) {
            acc[item.id].count += item.count;
        } else {
            acc[item.id] = { ...item };
        }
        return acc;
    }, {});

    const mergedCartItems = Object.values(cartItemsMap);

    setCartItems(mergedCartItems);
}, [cart]);





    return (
        <CartProduct>
            <Navbar />
            <div className="grid wide pd-top-1 pd-bt-36">
            
            {isEmpty ? (
            <div className="maxHeight noProductsYet">
                    <div className='imgCart'></div>
                    <p>Giỏ hàng đang trống</p>
                    <button onClick={handleShopping}> Mua ngay</button>
                </div>
                ) : (
                  <table className="listItemCart">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Số tiền</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                  {matchedItems.map((item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (cartItem && cartItem.count > 0) {
          return (
            <tr key={item.id}>
              <td className="productCell">{item.name}</td>
              <td>{item.price}</td>
              
              <td>
                <div className="button-container">
                  <button
                    className="crease"
                    onClick={() => handleIncrease(item.id , item.amount)}
                  >
                    <VscAdd />
                  </button>
                  <input
                    className="count"
                    type="number"
                    value={cartItem.count}
                    readOnly
                  />
                  <button
                    className="crease dercrease"
                    onClick={() => handleDecrease(item.id)}
                  >
                    <VscChromeMinimize />
                  </button>
                </div>
              </td>
              <td>{cartItem.count * item.price}</td>
              <td>
                <MdClear className="pointer" />
              </td>
            </tr>
          );
        }
        return null;
      })}
                  </tbody>
                </table>
            )}
            </div>
        </CartProduct>
    )
}

export default Cart

const CartProduct = styled.div`
    background-color: #f5f5f5;
    margin-top: 100px;
    font-size: 14px;

    .flex{
        display: flex;
    }

    .pd-top-1{
        padding-top: 1px;
    }

    .pd-bt-36{
        padding-bottom: 36px;
    }

    .pointer{
        cursor: pointer;
    }

    .imgCart{
        background-position: 50%;
        background-size: cover;
        width: 6.75rem;
        height: 6.125rem;
        background-repeat: no-repeat;
        background-image: url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png');
        margin-bottom: 14px;
    }

    button{
        border: 2px solid #5dad44;
        color: #fff;
        margin-top: 8px;
        padding: 8px 32px;
        background-color: #5dad44;
        border-radius: 4px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
    }
    
    .maxHeight{
        margin-top: -100px;
        height: 100vh;
    }

    .noProductsYet{
        margin-top: 100px;
        font-size: 16px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .listItemCart {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;

    th,
    td {
    padding: 8px;
    text-align: left;
    text-align: center;
    }
    
    th {
        background-color: #f2f2f2;
        border: 1px solid #ddd;
    }
    
    td {
        border: 1px solid #ddd;
    }   
    }

    .listItemCart tbody tr td:first-child,
    .listItemCart tbody tr td:last-child {
    padding-left: 12px;
    padding-right: 12px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .crease,
    .decrease {
    padding: 5px 10px;
    font-size: 16px;
    border: 1px solid #bbb;
    background-color: #f2f2f2;
    cursor: pointer;
    color: #bbb;
    margin: 0;
    }

    .count {
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

    .listItemCart {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.listItemCart th {
  padding: 10px;
  background-color: #f2f2f2;
}

.listItemCart td {
  padding: 10px;
}

.listItemCart td .button-container {
  display: flex;
  align-items: center;
}

.listItemCart td .count {
  width: 40px;
  text-align: center;
}

.listItemCart td .crease {
  padding: 5px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
}

.listItemCart td .crease:hover {
  background-color: #d0d0d0;
}

.listItemCart td .crease dercrease {
  margin-left: 5px;
}

.listItemCart .pointer {
  cursor: pointer;
}
`