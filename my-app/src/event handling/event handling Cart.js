// src/store/cartActions.js
export const increaseQuantity = (id, cartItems, setCartItems) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
};

export const decreaseQuantity = (id, cartItems, setCartItems) => {
    setCartItems(prevItems => {
        const item = prevItems.find(item => item.id === id);
        if (item.quantity === 1) {
            return prevItems.filter(item => item.id !== id);
        }
        return prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
    });
};

export const removeProduct = (id, cartItems, setCartItems) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
};

// src/store/cartUtils.js

export const addToCart = (cartItems, product) => {
    return cartItems.map(item =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
    );
};

export const addNewProduct = (cartItems, product) => {
    return [...cartItems, { ...product, quantity: 1 }];
};

//thêm một sản phẩm vào giỏ hàng. Nó kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
// src/store/cartUtils.js

export const handleAddToCart = (cartItems, product, quantity) => {
    const Product = cartItems.find(item => item.id === product.id);
    if (Product) {
        // Cập nhật số lượng cho sản phẩm đã tồn tại
        return cartItems.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + quantity } // Thêm số lượng vào sản phẩm đã tồn tại
                : item
        );
    } else {
        // Thêm sản phẩm mới với số lượng
        return addNewProduct(cartItems, { ...product, quantity });
    }
};


