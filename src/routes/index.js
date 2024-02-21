import HomeProduct from '../pages/product/HomeProduct/HomeProduct';
import Login from '../pages/product/user/Login';
import Price from '../pages/product/PriceProduct/Price';
import Cart from '../pages/product/Cart/Cart'
import Register from '../pages/product/user/index'

const publicRoutes = [
    {path: '/', compontent: HomeProduct},
    {path: '/login', compontent: Login},
    {path: '/inforproduct/:id', compontent: Price},
    {path: '/cart', compontent: Cart},
    {path: '/register', compontent: Register}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}