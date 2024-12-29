// src/ProductList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAlert, IoIosCart } from "react-icons/io";
import Pagination from "../Pagination"; 
import { fetchProducts, paginateProducts } from "../event handling/event handling ProductList";
import '../css/ProductList.css';
import bannerImage from '../img/anh1.jpg';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const currentProducts = paginateProducts(products, currentPage, productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-list">
      {/* Thêm banner ở đây */}
      <div className="banner-panel">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      <div className="container">
        
        <div className="row">
          {currentProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="product-card">
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                </Link>

                <div className="product-info">
                  <h5>{product.title}</h5>
                  <p><b>Brand:</b> {product.brand || 'Unknown'}</p>
                  <p><b>Price:</b> ${product.price}</p>
                  <p className="product-description">{product.description}</p>
                </div>

                <div className="product-actions">
                  <Link to={`/product/${product.id}`}>
                    <button className="btn btn-danger me-2 action-button"><IoIosCart /></button>
                  </Link>
                  <Link to={`/product/${product.id}`}>
                    <button className="btn btn-dark action-button"><IoIosAlert /></button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination 
          productsPerPage={productsPerPage} 
          totalProducts={products.length} 
          paginate={paginate} 
          currentPage={currentPage} 
        />
      </div>
    </div>
  );
}

export default ProductList;
