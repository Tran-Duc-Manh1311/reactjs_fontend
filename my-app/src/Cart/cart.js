import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import '../css/Cart.css'; 
import { increaseQuantity, decreaseQuantity, removeProduct } from '../event handling/event handling Cart';
import { toast } from 'react-toastify'; // Import toast

const Cart = ({ cartItems, setCartItems }) => {
    const [searchTerm, setSearch] = useState('');

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const filteredItems = cartItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.error("Không có sản phẩm nào trong giỏ hàng để thanh toán."); // Sử dụng toast
            return;
        }
        toast.success("Thanh toán thành công!"); // Sử dụng toast
        setCartItems([]);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title text-center mb-4">
                Giỏ Hàng <IoIosCart />
            </h1>

            <div className="search-container text-center mb-4">
                <input
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control"
                />
            </div>

            {filteredItems.length === 0 ? (
                <div className="cart-empty text-center">
                    <p>Không tìm thấy sản phẩm nào!</p>
                    <Link to="/" className="btn btn-primary cart-btn">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            ) : (
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="cart-product-info">    
                                        <img className="cart-product-image" style={{ width: '30%', height: '120px', objectFit: 'cover' }} src={item.thumbnail} alt={item.title} />
                                        <span>{item.title}</span>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <div className="cart-quantity-control">
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => decreaseQuantity(item.id, cartItems, setCartItems)}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => increaseQuantity(item.id, cartItems, setCartItems)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>

                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger cart-remove-btn"
                                            style={{ marginRight: '10px' }} 
                                            onClick={() => {
                                                removeProduct(item.id, cartItems, setCartItems);
                                                toast.success("Xóa sản phẩm khỏi giỏ hàng thành công!"); // Sử dụng toast
                                            }}
                                        >
                                            Xóa
                                        </button>
                                        <button 
                                            className="btn btn-primary cart-checkout-btn"
                                            onClick={() => { 
                                                removeProduct(item.id, cartItems, setCartItems); 
                                                toast.success(`Thanh toán sản phẩm "${item.title}" thành công!`); // Sử dụng toast
                                            }}
                                        >
                                            Thanh toán
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-summary">
                        <h4>Tổng số tiền: ${totalPrice.toFixed(2)}</h4>
                        <Link to="/" className="btn btn-secondary cart-continue-btn">
                            Tiếp tục mua sắm
                        </Link>
                        <button 
                            className="btn btn-primary cart-checkout-btn"
                            onClick={handleCheckout}
                        >
                            Thanh toán tất cả
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
