// src/event handling/event handling PDDetail.js

// Hàm fetchProduct để gọi API và lấy dữ liệu sản phẩm
export const fetchProduct = async (id, setProduct, setLoading) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data); // Cập nhật sản phẩm
 
  } catch (error) {
    console.error("Error fetching product data:", error);
    setLoading(false);
  }
};

// Hàm xử lý khi thêm vào giỏ hàng
export const 
AddToCart = (addToCart, product, quantity) => {
  addToCart({ ...product, quantity }); // Thêm sản phẩm vào giỏ hàng cùng số lượng
};

// Hàm giảm số lượng
export const 
MinusQuantity = (quantity, setQuantity) => {
  setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // Giữ số lượng tối thiểu là 1
};

// Hàm tăng số lượng
export const 
PlusQuantity = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};
