import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { FaBackward } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import '../css/ProductDetail.css';
import { fetchProduct } from '../event handling/event handling PDDetail';

const ProductDetail = ({ addToCart }) => { // Nhận addToCart từ props
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
 
  const [quantity, setQuantity] = useState(1); // State cho số lượng

  useEffect(() => {
    fetchProduct(id, setProduct); // Gọi hàm fetchProduct từ file event handling
  }, [id]);

  if (!product) {
    return null; 
  }

  const MinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }

  const PlusQuantity = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div className="container mt-5">
      <div className="product-detail shadow-lg p-4 rounded bg-white">
        <h1 className="text-center mb-4 display-6">{product.title}</h1>
        <div className="row">
          <div className="col-md-6">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="img-fluid rounded shadow-sm mb-4" 
              style={{ maxHeight: '400px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-6">
            <div className="product-info">
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Price:</strong> <span className="text-success">${product.price}</span></p>
              <p><strong>Category:</strong> {product.category}</p>

              <div className="quantity-controls w-20 flex justify-between gap-2">
                <button 
                  className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" 
                  onClick={MinusQuantity}
                >-</button>
                <span>{quantity}</span>
                <button 
                  className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600" 
                  onClick={PlusQuantity}
                >+</button>
              </div>

              <div className="buttons mt-4">
                <Link to="/" className="btn btn-secondary me-2">
                  <FaBackward className="me-2" /> Quay lại sản phẩm
                </Link>
                <button className="btn btn-danger" onClick={() => {
                    addToCart(product, quantity); // Gọi addToCart với sản phẩm và số lượng
                    alert("Sản phẩm đã được thêm vào giỏ hàng thành công");
                }}>
                  <IoIosCart className="me-2" /> Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
