import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/cartSlice.js';
import CartItemList from './CartItemList.js';

export default function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <div className='p-4 m-4 text-center'>
            <h1 className="font-bold text-2xl">Cart Page</h1>
            <div className='w-8/12 m-auto text-left'>
                <button
                    className='p-2 px-4 m-2 bg-gray-300 rounded-lg shadow-xl hover:bg-gray-400'
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 ? (
                    <h1 className='flex justify-center mt-24'>No items in your cart.</h1>
                ) : (
                    <CartItemList items={cartItems} />
                )}
            </div>
        </div>
    );
}